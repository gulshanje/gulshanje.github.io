import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => 
    
    localStorage.getItem('token') || sessionStorage.getItem('token')
);

  const login = (token) => {
    sessionStorage.setItem('token', token);
    setToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
