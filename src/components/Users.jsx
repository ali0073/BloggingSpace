import { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import { fetchUsers, usersFiltering } from "../utils/utils";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  const filteredUsers = usersFiltering(query, users);

  return (
    <>
      <Container sx={{ marginTop: "40px" }}>
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          fullWidth
          label="search the user"
        />
      </Container>
      <Container>
        <List>
          {filteredUsers.map((user) => (
            <ListItem key={user.id}>
              <ListItemText
                primary={`${user.name} (${user.username})`}
                secondary={`Email: ${user.email}, Website: ${user.website}, Company: ${user.company.name}`}
                onClick={() => {
                  navigate(`${ROUTES.USERS}/${user.id}`);
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
