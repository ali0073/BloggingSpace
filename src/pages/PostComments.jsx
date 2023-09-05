import { POST_COMMENTS_KEY, USER_POST_KEY } from '../network/keys';
import { POST_COMMENTS_URL, USER_POST_URL } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { replaceID } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import Comments from '../components/Comments';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';

const PostComments = () => {
  const { id } = useParams();

  const { data: comments, isLoading } = useGetHandler(
    POST_COMMENTS_KEY,
    replaceID(POST_COMMENTS_URL, id)
  );

  const { data: post } = useGetHandler(
    USER_POST_KEY,
    replaceID(USER_POST_URL, id)
  );

  return (
    <>
      <Post post={post} />
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <Comments comments={comments} />
      )}
    </>
  );
};

export default PostComments;
