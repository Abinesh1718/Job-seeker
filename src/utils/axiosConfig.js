import React, { useState, useEffect } from 'react';
import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

axiosInstance.interceptors.request.use(
  (config) => {


    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response) => {
  return response;
},
  async (error) => {
    if (error?.response?.status === 401) {

      console.log('Unauthorized!');
    } else if (error?.response?.status === 403) {
      console.log('Forbidden!');
    }
    return Promise.reject(error);
  }
);
export default axiosInstance