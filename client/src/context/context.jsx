import React, { useContext } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value="hello">{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
