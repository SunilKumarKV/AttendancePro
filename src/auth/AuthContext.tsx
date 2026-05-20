import React, { createContext, useContext, useMemo, useState } from 'react';
import { AuthState, Role, User } from '../types';
import { clearAuthToken, clearStoredUser, getStoredUser, setStoredUser } from './authStorage';

interface AuthContextType extends AuthState {
  currentUser: User | null;
  role: Role | null;
  login: (email: string, role: Role) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(() => {
    const user = getStoredUser();

    return {
      user,
      isAuthenticated: Boolean(user),
    };
  });

  const login = (email: string, role: Role): boolean => {
    const isAdmin = email === 'admin@college.edu' && role === 'Admin';
    const isProf = email === 'prof@college.edu' && role === 'Professor';

    if (isAdmin || isProf) {
      const user: User = {
        name: isAdmin ? 'System Admin' : 'Dr. Professor',
        email,
        role,
      };

      setState({ user, isAuthenticated: true });
      setStoredUser(user);
      return true;
    }

    return false;
  };

  const logout = () => {
    setState({ user: null, isAuthenticated: false });
    clearStoredUser();
    clearAuthToken();
    localStorage.removeItem('adminProfile');
    localStorage.removeItem('appSettings');
  };

  const value = useMemo<AuthContextType>(() => ({
    ...state,
    currentUser: state.user,
    role: state.user?.role ?? null,
    login,
    logout,
  }), [state]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
