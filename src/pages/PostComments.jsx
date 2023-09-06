import { POST_COMMENTS_KEY, USER_POST_KEY } from '../network/keys';
import { POST_COMMENTS_URL, USER_POST_URL } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { replaceId } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import Comments from '../components/Comments';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';

const PostComments = () => {
  const { userId, postId } = useParams();

  const idUser = [{ key: 'userId', value: userId }];
  const idPost = [{ key: 'postId', value: postId }];

  const { data: comments, isLoading } = useGetHandler(
    POST_COMMENTS_KEY,
    replaceId(POST_COMMENTS_URL, idPost)
  );

  const { data: post } = useGetHandler(
    USER_POST_KEY,
    replaceId(USER_POST_URL, idUser)
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
