const api = async (method = '', url = '', data = {}) => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

const post = (url, body) => api('POST', url, body);
const get = (url) => api('GET', url);

const https = {
  get,
  post,
};

export default https;
