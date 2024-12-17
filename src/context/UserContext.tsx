import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  auth: boolean;
  setAuth: (value: boolean) => void;
  username: string;
  setUsername: (value: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ auth, setAuth, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
