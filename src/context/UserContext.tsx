import React, { createContext, useState, ReactNode } from "react";

interface UserContextType {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

// Create the provider component
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(true);

  return (
    <UserContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
