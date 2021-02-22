import axios from 'axios';

const baseURL = 'https://blog-x.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL: baseURL,  
});

axiosInstance.interceptors.response.use(function (response) {    
  return response;
}, function (error) {  
  // if(error.response.status === 401 || error.response.status === 403) window.location.href = '/logout';
  return Promise.reject(error);
});


export default axiosInstance;