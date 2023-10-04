import React, { useContext } from 'react';

import Login from './components/Login';
import './App.css';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <main>{!ctx.isLoggedIn && <Login />}</main>
    </React.Fragment>
  );
}

export default App;
