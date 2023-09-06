import { useNavigate } from 'react-router-dom';
import { Container, List, ListItem, Button } from '@mui/material';
import { COMMENTS } from '../routes/routes';
import { replaceId } from '../utils/utils';
import Post from './Post';
import { SHOW_COMMENTS_BUTTON } from '../utils/constants';

const Posts = ({ posts, userId }) => {
  const navigate = useNavigate();

  const handleShowCommentClick = postId => {
    const ids = [
      { key: 'userId', value: userId },
      { key: 'postId', value: postId },
    ];
    navigate(replaceId(COMMENTS, ids));
  };

  return (
    <>
      {posts && (
        <Container>
          <List>
            {posts?.map(post => (
              <ListItem key={post?.id}>
                <Container>
                  <Post post={post} />
                  <Button
                    sx={{ color: 'black', borderColor: 'black' }}
                    variant="outlined"
                    onClick={() => handleShowCommentClick(post?.id)}
                  >
                    {SHOW_COMMENTS_BUTTON}
                  </Button>
                </Container>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};

export default Posts;
