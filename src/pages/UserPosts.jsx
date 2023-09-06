import { USER_POSTS_KEY } from '../network/keys';
import { USER_POSTS_URL } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Posts from '../components/Posts';
import { replaceId } from '../utils/utils';

const UserPosts = () => {
  const { userId } = useParams();

  const idUser = [{ key: 'userId', value: userId }];

  const { data: posts, isLoading } = useGetHandler(
    USER_POSTS_KEY,
    replaceId(USER_POSTS_URL, idUser)
  );

  return (
    <>
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <Posts posts={posts} userId={userId} />
      )}
    </>
  );
};

export default UserPosts;
