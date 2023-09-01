import { useContext, useEffect, useState } from 'react';
import { keys } from '../network/keys';
import { urls } from '../network/urls';
import { useGetHandler } from '../network/useQueryClient';
import { filterComments } from '../utils/utils';
import { CircularProgress } from '@mui/material';
import { context } from '../context/ContextProvider';
import Comments from '../components/Comments';
import CommentHeader from '../components/CommentHeader';

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const { postId, post } = useContext(context);

  const { data, isLoading } = useGetHandler(
    keys.POST_COMMENTS,
    urls.POST_COMMENTS
  );

  useEffect(() => {
    if (data) {
      const comments = filterComments(data, postId);
      setComments(comments);
    }
  }, [data]);

  return (
    <>
      <CommentHeader post={post} />
      {isLoading ? (
        <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} />
      ) : (
        <Comments comments={comments} />
      )}
    </>
  );
};

export default PostComments;
