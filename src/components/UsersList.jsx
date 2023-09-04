import { Container, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../routes/routes';
import { replaceID } from '../utils/utils';

const UsersList = ({ users }) => {
  const navigate = useNavigate();
  return (
    <>
      {users && (
        <Container>
          <List>
            {users.map(user => (
              <ListItem key={user.id}>
                <ListItemText
                  primary={`${user.name} (${user.username})`}
                  secondary={`Email: ${user.email}, Website: ${user.website}, Company: ${user.company.name}`}
                  onClick={() => {
                    navigate(replaceID(routes.POSTS, user.id));
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default UsersList;
