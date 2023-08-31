import { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [postId, setPostId] = useState(0);
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  return (
    <context.Provider value={{ postId, setPostId, post, setPost }}>
      {children}
    </context.Provider>
  );
};
