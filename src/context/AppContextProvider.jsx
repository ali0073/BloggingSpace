import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [openUserId, setOpenUserId] = useState(1);

  return (
    <AppContext.Provider value={{ openUserId, setOpenUserId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
