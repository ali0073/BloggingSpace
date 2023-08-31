import { useEffect, useState } from 'react';
import { keys } from '../network/keys';
import { urls } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { filterPosts } from '../utils/utils';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Posts from '../components/Posts';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  const { data, isLoading } = useGetHandler(keys.USER_POSTS, urls.USER_POSTS);

  useEffect(() => {
    if (data) {
      const posts = filterPosts(data, id);
      setPosts(posts);
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <Posts posts={posts} id={id} />
      )}
    </>
  );
};

export default UserPosts;
