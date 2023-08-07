import { getRequest } from "../network/axiosClient";
import { URLS } from "../network/urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchUsers = async (data) => {
  try {
    const users = await getRequest(URLS.USERS);
    data(users.data);
  } catch (error) {
    toast.error("Something went wrong, please try again!");
  }
};

export const searchUsers = (query, users) => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};
