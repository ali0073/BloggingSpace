import { ListItemText } from '@mui/material';

const Post = ({ post }) => {
  return (
    <>
      {post && (
        <ListItemText
          primary={`Title: ${post?.title}`}
          secondary={post?.body}
        />
      )}
    </>
  );
};

export default Post;
