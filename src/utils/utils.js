import { getRequest } from "../network/axiosClient";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchUsers = async (data, url) => {
  const users = await getRequest(url);
  data(users.data);
};

export const searchUsers = (query, users) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterPosts = (posts, id) => {
  return posts.filter((item) => item.userId === parseInt(id));
};

export const errorHandler = error => {
  if (error.response.status === 404) {
    toast.error("Something went wrong, please try again!");
  } else if (error.code === "ERR_NETWORK") {
    toast.error("connection problems");
  } else if (error.code === "ERR_CANCELED") {
    toast.error("connection canceled");
  }
};

