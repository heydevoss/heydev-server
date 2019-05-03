import config from './config';

export const generateRandomState = length => {
  let state = '';
  const letters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    state += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return state;
};

export const getAuthBaseURL = path => `${config.github.baseAuthUrl}${path}`;
export const getClientURL = path => `${config.client.baseUrl}${path}`;
export const getHostURL = path => {
  if (config.host.production) return `${config.host.baseUrl}${path}`;
  return `${config.host.baseUrl}:${config.host.port}${path}`;
};
