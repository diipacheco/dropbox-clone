import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dropbox-node-api.herokuapp.com',
});

export default api;
