export const searchUsers = (query, users) => {
  return users.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const replaceID = (route, ...ids) => {
  let index = 0;
  return route.replace(/:id/g, () => {
    if (index < ids.length) {
      const replaced = ids[index];
      index++;
      return replaced;
    }
    return ':id';
  });
};
