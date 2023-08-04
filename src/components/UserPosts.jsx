import { useContext, useEffect, useState } from "react";
import { getRequest } from "../network/axiosClient";
import { Container, List, ListItem, ListItemText } from "@mui/material";
import { AppContext } from "../context/AppContextProvider";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { openUserId } = useContext(AppContext);

  async function fetchUsers() {
    try {
      const userPostsData = await getRequest("posts");
      setUserPosts(userPostsData?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
    console.log(openUserId);
  }, []);

  return <div>USER POSTS</div>;
};

export default UserPosts;
