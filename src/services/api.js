import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bgreen-anbima-api.herokuapp.com/api/',
});

export default api;