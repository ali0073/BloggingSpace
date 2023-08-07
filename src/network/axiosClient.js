import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

export function getRequest(URL) {
  return axiosClient.get(`${URL}`).then((response) => response);
}
