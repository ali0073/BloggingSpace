import { getRequest } from "../network/axiosClient";

export async function fetchUsers(dataSetter) {
  try {
    const users = await getRequest("users");
    dataSetter(users.data);
  } catch (error) {
    console.log(error);
  }
}

export function usersFiltering(querySetter, usersSetter) {
  return usersSetter.filter((user) =>
    user.name.toLowerCase().includes(querySetter.toLowerCase())
  );
}
