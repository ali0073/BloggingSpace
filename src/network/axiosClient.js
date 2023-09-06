import axios from 'axios';
import { toast } from 'react-toastify';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const responseStatus = String(error?.response?.status);
    if (responseStatus.startsWith('5')) {
      toast.error('Something went wrong, please try again!');
    }
    return Promise.reject(error);
  }
);

export const getRequest = async url => {
  const response = await axiosClient.get(url);
  return response?.data;
};
