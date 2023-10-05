import React, { useContext } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book/Book';
import './App.css';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      {/* {!ctx.isRegister ? <Login /> : <Register />} */}
      {/* {!ctx.isLoggedIn && <Register /> && <Login />} */}
      {!ctx.isLoggedIn && <Book />}
      {/* {!ctx.isLoggedIn && <Login />} */}
    </React.Fragment>
  );
}

export default App;
