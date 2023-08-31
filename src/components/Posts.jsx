import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../context/ContextProvider';
import { Container, List, ListItem, ListItemText, Button } from '@mui/material';
import { routes } from '../routes/routes';
import { replaceID } from '../utils/utils';

const PostsList = ({ posts, id }) => {
  const { setPostId, setPost } = useContext(context);

  const navigate = useNavigate();

  return (
    <Container>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <Container>
              <ListItemText
                primary={`Title: ${post.title}`}
                secondary={post.body}
              />
              <Button
                sx={{ color: 'black', borderColor: 'black' }}
                variant="outlined"
                onClick={() => {
                  navigate(replaceID(routes.COMMENTS, id));
                  setPostId(post.id);
                  setPost({ title: post.title, body: post.body });
                }}
              >
                Show comments
              </Button>
            </Container>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostsList;
