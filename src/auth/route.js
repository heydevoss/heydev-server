import 'dotenv/config';
import express from 'express';
import querystring from 'querystring';
import request from 'request';

import config from './data';

import { generateRandomState, getAuthBaseURL, getClientURL } from './util';

const router = express.Router();
const stateKey = 'github-auth-state';

router.get('/login', (req, res) => {
  const state = generateRandomState(16);
  res.cookie(stateKey, state);

  const queryString = querystring.stringify({
    client_id: config.github.clientId,
    redirect_uri: config.github.redirectUrl,
    state,
  });

  const url = getAuthBaseURL(`/authorize?${queryString}`);
  res.redirect(url);
});

router.get('/callback', (req, res) => {
  const storedState = req.cookies ? req.cookies[stateKey] : null;
  const { state } = req.query;

  if (state && storedState === state) {
    requestAccessToken(req, res);
  } else {
    const queryString = querystring.stringify({ error: 'state_mismatch' });
    const url = getClientURL(`${config.client.errorPath}?${queryString}`);
    res.redirect(url);
  }
});

const requestAccessToken = (req, res) => {
  res.clearCookie(stateKey);
  const { code } = req.query;

  const requestOptions = {
    url: getAuthBaseURL('/access_token'),
    json: true,
    form: {
      code,
      redirect_uri: config.github.redirectUri,
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
    },
  };

  request.post(requestOptions, (error, response, body) => {
    let url;
    if (!error && response.statusCode === 200) {
      const { accessToken } = body;
      url = getClientURL(`${config.client.successPath}/${accessToken}`);
    } else {
      const queryString = querystring.stringify({ error: 'invalid_token' });
      url = getClientURL(`${config.client.errorPath}?${queryString}`);
    }
    res.redirect(url);
  });
};

export default router;
