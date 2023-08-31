export const searchUsers = (query, users) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const filterPosts = (posts, id) => {
  return posts.filter(item => item.userId === parseInt(id));
};

export const replaceID = (route, id) => {
  return route.replace(':id', id);
};

export const filterComments = (comments, id) => {
  return comments.filter(comment => comment.postId === parseInt(id));
};
