import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  isRegister: false,
  isRegisterClickButton: () => {},
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(!isRegister);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    console.log(props.emailData);
    setIsLoggedIn(true);
  };

  const registerHandler = () => {
    setIsRegister(!isRegister);
    console.log(isRegister, 'tıklandı');
    console.log('click');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isRegisterClickButton: registerHandler,
        isRegister: isRegister,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
