import { useNavigate } from 'react-router-dom';
import { Container, List, ListItem, Button } from '@mui/material';
import { COMMENTS } from '../routes/routes';
import { replaceID } from '../utils/utils';
import Post from './Post';
import { constants } from '../utils/constants';

const Posts = ({ posts, id }) => {
  const navigate = useNavigate();

  const handleShowCommentClick = post => {
    navigate(replaceID(COMMENTS, id, post.id));
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
                    onClick={() => handleShowCommentClick(post)}
                  >
                    {constants.SHOW_COMMENTS_BUTTON}
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
