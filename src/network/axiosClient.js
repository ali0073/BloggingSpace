import axios from "axios";
import { toast } from "react-toastify";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

axiosClient.interceptors.response.use( response => {
  return response;
}, error => {
  if (error.response.status === 500) {
    toast.error("Something went wrong, please try again!");
  } 
  return Promise.reject(error);
});

export const getRequest = async url => {
  const response = await axiosClient.get(`${url}`)
  return response.data
};

