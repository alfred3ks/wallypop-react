import { createContext, useState } from 'react';
// creamos el context:
export const AuthContext = createContext(false);

// Componente provider:
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ innitiallyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(innitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const AuthValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
};
