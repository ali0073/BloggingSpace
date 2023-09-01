import { Button } from '@mui/material';

const ShowCommentsButton = ({ label, handleShowCommentClick, post }) => {
  return (
    <Button
      sx={{ color: 'black', borderColor: 'black' }}
      variant="outlined"
      onClick={() => handleShowCommentClick(post)}
    >
      {label}
    </Button>
  );
};

export default ShowCommentsButton;
