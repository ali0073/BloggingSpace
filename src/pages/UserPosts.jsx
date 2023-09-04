import { keys } from '../network/keys';
import { urls } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Posts from '../components/Posts';
import { replaceID } from '../utils/utils';

const UserPosts = () => {
  const { id } = useParams();

  const { data: posts, isLoading } = useGetHandler(
    keys.USER_POSTS,
    replaceID(urls.USER_POSTS, id)
  );

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
