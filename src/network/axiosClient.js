import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}
