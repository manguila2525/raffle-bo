import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  loginAuth: (token: string) => void;
  logoutAuth: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const loginAuth = (newToken: string) =>{
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logoutAuth = () =>{
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        loginAuth,
        logoutAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
