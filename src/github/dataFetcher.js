import fetch from 'node-fetch';

const makePostRequest = async (url, headers, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body,
    headers,
  });

  const data = await response.json();

  return data;
};

const generateHeaders = authorization => {
  const headers = {
    authorization,
  };

  return headers;
};

const fetchData = async (body, authenticationToken) => {
  const headers = generateHeaders(authenticationToken);
  return await makePostRequest('https://api.github.com/graphql', headers, body);
};

export default fetchData;
