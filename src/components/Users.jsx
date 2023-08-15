import { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { searchUsers } from "../utils/utils";
import { urls } from "../network/urls";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../network/axiosClient";

const Users = () => {

  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([])

  const navigate = useNavigate();

  const { data, status } = useQuery({ queryKey: ['users'], queryFn: () => {return getRequest(urls.USERS)} })

  useEffect(() => {
    if (status === "success") {
      const users = searchUsers(query, data);
      setFilteredUsers(users);
    }
  }, [status, query, data]);

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
                  navigate(`${routes.USERS}/${user.id}`);
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

