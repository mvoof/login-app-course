import { createContext, useEffect, useState } from 'react';

export type AuthContextType = {
  isLoggedIn: boolean;
  onLogin: (/* enteredEmail: string, enteredPassword: string */) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  onLogin: (/* enteredLogin: string, enteredPassword: string */) => {},
  onLogout: () => {},
});

type AuthContextProviderType = {
  children: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedInInfromation = localStorage.getItem('isLoggedIn');

    if (storedLoggedInInfromation === '1') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const loginHandler = (/* email: string, password: string */) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');

    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
