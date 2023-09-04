import { keys } from '../network/keys';
import { urls } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { replaceID } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import Comments from '../components/Comments';
import Post from '../components/Post';
import { useParams } from 'react-router-dom';

const PostComments = () => {
  const { id } = useParams();

  const { data: comments, isLoading } = useGetHandler(
    keys.POST_COMMENTS,
    replaceID(urls.POST_COMMENTS, id)
  );

  const { data: post } = useGetHandler(
    keys.USER_POST,
    replaceID(urls.USER_POST, id)
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
