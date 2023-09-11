export const searchUsers = (query, users) => {
  return users?.filter(user =>
    user?.name?.toLowerCase().includes(query.toLowerCase())
  );
};

export const replaceId = (route, ids) => {
  for (const { key, value } of ids) {
    route = route.replace(`:${key}`, value);
  }
  return route;
};
