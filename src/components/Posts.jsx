import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from '../context/ContextProvider';
import { Container, List, ListItem, ListItemText, Button } from '@mui/material';
import { routes } from '../routes/routes';
import { replaceID } from '../utils/utils';
import ShowCommentsButton from './ShowCommentsButton';
import PostHeader from './PostHeader';
import { constants } from '../utils/constants';

const Posts = ({ posts, id }) => {
  const { setPostId, setPost } = useContext(context);

  const navigate = useNavigate();

  const handleShowCommentClick = post => {
    navigate(replaceID(routes.COMMENTS, id));
    setPostId(post.id);
    setPost({ title: post.title, body: post.body });
  };

  return (
    <Container>
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <Container>
              <PostHeader post={post} />
              <ShowCommentsButton
                label={constants.SHOW_COMMENTS_BUTTON_LABEL}
                handleShowCommentClick={handleShowCommentClick}
                post={post}
              />
            </Container>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Posts;
