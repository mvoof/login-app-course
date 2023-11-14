import { createContext } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
});

export default AuthContext;
