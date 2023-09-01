import { Container, ListItemText } from '@mui/material';

const CommentHeader = ({ post }) => {
  return (
    <Container>
      <ListItemText
        primary={`Post Title :${post.title}`}
        secondary={`Post Body :${post.body}`}
      />
    </Container>
  );
};

export default CommentHeader;
