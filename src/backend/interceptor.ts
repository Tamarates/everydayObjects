// src/axiosInstance.js
import axios from 'axios';

const url = 'http://localhost:5050/everyday'

axios.defaults.baseURL = url;

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'No Auth';
    config.headers['Content-Type'] = 'application/json';
    
    return config;
  },
  (error) => {
    console.error('Error al enviar la solicitud:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {axios, url, axiosInstance};