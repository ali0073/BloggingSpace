export const searchUsers = (query, users) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const replaceID = (route, firstId, secondId) => {
  if (route && firstId && secondId) {
    return `${route.replace(':id', firstId)}/${secondId}/comments`;
  }

  if (route && firstId) {
    return route.replace(':id', firstId);
  }
};
