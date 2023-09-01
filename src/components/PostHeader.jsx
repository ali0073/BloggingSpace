import { ListItemText } from '@mui/material';

const PostHeader = ({ post }) => {
  return (
    <ListItemText primary={`Title: ${post.title}`} secondary={post.body} />
  );
};

export default PostHeader;
