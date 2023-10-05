import React from 'react';
import Button from '../../UI/Button';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.title}>Book List</div>
      <div className={classes['header-buttons']}>
        <Button className={'header-button'}>Add Book</Button>
        <Button className={'header-button'}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
