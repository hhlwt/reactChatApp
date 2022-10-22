import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const isThereToken = !!localStorage.getItem('userToken');
  const [loggedIn, setLoggedIn] = useState(isThereToken);

  
  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('userToken');
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;