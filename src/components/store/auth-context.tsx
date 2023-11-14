import { createContext } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  onLogout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContext;
