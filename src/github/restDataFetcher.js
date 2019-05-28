import fetch from 'node-fetch';

const makeGetRequest = async (url, headers) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  const data = await response.json();

  return data;
};

const generateHeaders = () => {
  const headers = {
    accept: 'application/vnd.github.cloak-preview',
  };

  return headers;
};

const fetchRestData = async url => {
  const headers = generateHeaders();
  return makeGetRequest(url, headers);
};

export default fetchRestData;
