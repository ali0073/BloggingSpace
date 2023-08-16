export const searchUsers = (query, users) => {
  return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
};

export const filterPosts = (posts, id) => {
  return posts.filter(item => item.userId === parseInt(id));
};

