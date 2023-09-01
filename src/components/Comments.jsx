import { Container, List, ListItem, ListItemText } from '@mui/material';

const Comments = ({ comments }) => {
  return (
    <Container>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id}>
            <Container>
              <ListItemText
                primary={`Name :${comment.name}`}
                secondary={`Comment :${comment.body}`}
              />
            </Container>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Comments;
