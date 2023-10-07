import React, { useContext } from 'react';
import Button from '../../UI/Button';
import AuthContext from '../../../store/auth-context';

import classes from './Header.module.css';

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.header}>
      <div className={classes.title}>Book List</div>
      <div className={classes['header-buttons']}>
        <Button onClick={ctx.onLogout} className={'header-button'}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
