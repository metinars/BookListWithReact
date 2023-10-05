import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import LoginForm from './LoginForm';

import classes from './Login.module.css';
import userImage from '../../assets/user.png';

const Login = () => {
  const [isRegisterButton, setIsRegisterButton] = useState(false);

  const registerClickHandler = () => {
    !isRegisterButton ? setIsRegisterButton(true) : setIsRegisterButton(false);
  };

  return (
    <Card>
      <img className={classes.img} src={userImage} />
      <p>Welcome</p>
      <p>{!isRegisterButton ? 'Sign In' : 'Sing Up'}</p>
      <LoginForm registerButton={isRegisterButton} />
      <div className={classes['register']}>
        <Button onClick={registerClickHandler}>
          {isRegisterButton ? 'Login' : 'Sign Up'}
        </Button>
      </div>
    </Card>
  );
};

export default Login;
