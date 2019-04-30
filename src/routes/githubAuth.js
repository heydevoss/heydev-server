import express from 'express';
import querystring from 'querystring';
import request from 'request';
import { generateRandomState } from './../util';

const router = express.Router();
const stateKey = 'github-auth-state';

const config = {
  github: {
    clientId: 'Iv1.c410b219242b2824',
    clientSecret: '3823538321cabcc4ad1eba74efec9a0e6640ebef',
    redirectUrl: 'http://localhost:5000/auth/callback',
    baseAuthUrl: 'https://github.com/login/oauth'
  },
  client: {
    baseUrl: 'http://localhost:8080',
    successPath: '/auth',
    errorPath: '/error'
  },
  host: {
    baseUrl: 'http://localhost',
    port: 5000
  }
}

router.get('/login', (req, res) => {
  const state = generateRandomState(16);
  res.cookie(stateKey, state);
  res.redirect(config.github.baseAuthUrl + '/authorize?'
    + querystring.stringify({
      client_id: config.github.clientId,
      redirect_uri: config.github.redirectUrl,
      state
    })
  );
});

router.get('/callback', (req, res) => {
  const storedState = req.cookies ? req.cookies[stateKey] : null;
  const { state } = req.query;
  
  if (state && storedState === state) {
    requestAccessToken(req, res);
  } else {
    res.redirect(config.client.baseUrl + config.client.errorPath + '?' 
      + querystring.stringify({ error: 'state_mismatch' })
    );
  }
});

const requestAccessToken = (req, res) => {
  res.clearCookie(stateKey);
  const { code } = req.query;

  const requestOptions = {
    url: config.github.baseAuthUrl + '/access_token',
    json: true,
    form: {
      code,
      redirect_uri: config.github.redirectUri,
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret
    }
  }

  request.post(requestOptions, (error, response, body) => {
    if (!error & response.statusCode === 200) {
      const { access_token } = body;
      res.redirect(config.client.baseUrl + config.client.successPath + '/' + access_token);
    } else {
      res.redirect(config.client.baseUrl + config.client.errorPath + '?' +
        querystring.stringify({ error: 'invalid_token' })
      );
    }
  });
}

export default router;