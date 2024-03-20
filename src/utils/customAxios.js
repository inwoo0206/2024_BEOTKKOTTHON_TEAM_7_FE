import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {},
  withCredentials: true,
  redirect: 'follow',
});

export { api };
