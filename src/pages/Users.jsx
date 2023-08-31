import { useEffect, useState } from 'react';
import { CircularProgress, Container, TextField } from '@mui/material';
import { searchUsers } from '../utils/utils';
import { useGetHandler } from '../network/useQueryClient';
import { keys } from '../network/keys';
import { urls } from '../network/urls';
import UsersList from '../components/UsersList';

const Users = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const { data, isLoading } = useGetHandler(keys.USERS, urls.USERS);

  useEffect(() => {
    if (data) {
      const user = searchUsers(query, data);
      setUsers(user);
    }
  }, [data, query]);

  return (
    <>
      <Container sx={{ marginTop: '40px' }}>
        <TextField
          onChange={e => setQuery(e.target.value)}
          value={query}
          fullWidth
          label="search the user"
        />
      </Container>
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <UsersList users={users} />
      )}
    </>
  );
};

export default Users;
