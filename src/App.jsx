import React, { useContext } from 'react';

import Login from './components/Login';
import Book from './components/Book/Book';
import './App.css';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>{!ctx.isLoggedIn ? <Login /> : <Book />}</React.Fragment>
  );
}

export default App;
