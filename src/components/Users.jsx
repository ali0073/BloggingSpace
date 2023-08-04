import { useContext, useEffect, useState } from "react";
import { getRequest } from "../network/axiosClient";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { AppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/Routes";

const Users = () => {
  const [FetchedUsersList, setFetchedUsersList] = useState([]);
  const [searchFieldText, setSearchFieldText] = useState("");
  const { setOpenUserId } = useContext(AppContext);

  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const usersList = await getRequest("users");
      setFetchedUsersList(usersList?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = FetchedUsersList.filter((user) =>
    user?.name?.toLowerCase().includes(searchFieldText.toLowerCase())
  );

  return (
    <>
      <Container sx={{ marginTop: "40px" }}>
        <TextField
          onChange={(e) => setSearchFieldText(e?.target?.value)}
          value={searchFieldText}
          fullWidth
          label="search the user"
        />
      </Container>
      <Container>
        <List>
          {filteredUsers.map((user) => (
            <ListItem key={user?.id}>
              <ListItemText
                primary={`${user?.name} (${user?.username})`}
                secondary={`Email: ${user?.email}, Website: ${user?.website}, Company: ${user?.company?.name}`}
                onClick={() => {
                  setOpenUserId(user?.id);
                  navigate(`${ROUTES.USERS}/${user?.id}`);
                }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Users;
