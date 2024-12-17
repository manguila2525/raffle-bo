import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  auth: boolean;
  setAuth: (value: boolean) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false); // auth inicializado como false

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
