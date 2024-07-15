import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthLogin {
  user: string | null;
  login: (username: string, password: string) => boolean; 
  logout: () => void;
}

const AuthContext = createContext<AuthLogin | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'password') {
      setUser(username);
      return true; 
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthLogin => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
