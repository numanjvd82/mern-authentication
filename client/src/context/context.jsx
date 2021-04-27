import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async (req, res) => {
    const loggedInRes = await axios.get('http://localhost:5000/loggedIn');
    setLoggedIn(loggedInRes.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
