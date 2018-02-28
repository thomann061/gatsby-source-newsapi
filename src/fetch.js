const axios = require(`axios`)

exports.fetch = apiKey => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  return axios.get(url);
}