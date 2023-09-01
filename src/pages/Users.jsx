import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { searchUsers } from '../utils/utils';
import { useGetHandler } from '../network/useQueryClient';
import { keys } from '../network/keys';
import { urls } from '../network/urls';
import UsersList from '../components/UsersList';
import SearchBar from '../components/SearchBar';

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
      <SearchBar setQuery={setQuery} query={query} />
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <UsersList users={users} />
      )}
    </>
  );
};

export default Users;
