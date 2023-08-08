import axios from "axios";
import { errorHandler } from "../utils/utils";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

export const getRequest = URL => {
  return axiosClient
    .get(`${URL}`)
    .then(response => response)
    .catch(error => errorHandler(error));
};

