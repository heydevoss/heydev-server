const config = {};

let port;
if (process.env.NODE_ENV === 'production') port = process.env.PORT;

config.github = {
  clientId: `${process.env.GITHUB_APP_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_APP_CLIENT_SECRET}`,
  redirectUrl: `${process.env.GITHUB_APP_CALLBACK_URL}`,
  baseAuthUrl: 'https://github.com/login/oauth'
};

config.client = {
  baseUrl: `${process.env.CLIENT_BASE_URL}:${process.env.CLIENT_PORT}` || 'http://localhost:8080',
  successPath: process.env.CLIENT_AUTH_SUCCESS_PATH || '/auth',
  errorPath: process.env.CLIENT_AUTH_FAIL_PATH || '/error'
};

config.host = {
  baseUrl: process.env.SERVER_BASE_URL || 'http://localhost',
  port: port || process.env.SERVER_PORT || 5000,
  production: process.env.NODE_ENV === 'production'
};

export default config;