import { useEffect, useState } from "react";
import {
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { searchUsers } from "../utils/utils";
import { useGetHandler } from "../network/useQueryClient";
import {keys} from '../network/keys'

const Users = () => {

  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([])

  const navigate = useNavigate();

  const {data, status} = useGetHandler(keys.users)   

  useEffect(() => {
    if (data) {
      const user = searchUsers(query, data);
      setUsers(user);
    }
  }, [data, query]);

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
      {status === 'loading' ? <CircularProgress sx={{marginLeft: '50%', marginTop: '20%'}} /> : <Container>
        <List>
          {users.map((user) => (
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
      </Container>}
    </>
  );
};

export default Users;

