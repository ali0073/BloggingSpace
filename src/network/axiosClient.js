import axios from "axios";
import { errorHandler } from "../utils/utils";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

axiosClient.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {

  errorHandler(error)
  return Promise.reject(error);
});

export const getRequest = url => {
  return axiosClient
    .get(`${url}`)
    .then(response => response)
};

