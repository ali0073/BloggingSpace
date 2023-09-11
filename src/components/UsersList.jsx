import { Container, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { POSTS } from '../routes/routes';
import { replaceId } from '../utils/utils';

const UsersList = ({ users }) => {
  const navigate = useNavigate();

  const handlePostClick = userId => {
    const idUser = [{ key: 'userId', value: userId }];
    navigate(replaceId(POSTS, idUser));
  };

  return (
    <>
      {users && (
        <Container>
          <List>
            {users?.map(user => (
              <ListItem key={user?.id}>
                <ListItemText
                  primary={`${user?.name} (${user?.username})`}
                  secondary={`Email: ${user?.email}, Website: ${user?.website}, Company: ${user?.company?.name}`}
                  onClick={() => handlePostClick(user?.id)}
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
