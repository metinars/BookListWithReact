import { useContext, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import LoginForm from '../Login/LoginForm';
import AuthContext from '../../store/auth-context';

import classes from './Register.module.css';

import userImage from '../../assets/user.png';

const Register = () => {
  const [isRegisterButton, setIsRegisterButton] = useState(false);

  const authCtx = useContext(AuthContext);

  const registerClickHandler = () => {
    !isRegisterButton ? setIsRegisterButton(true) : setIsRegisterButton(false);
    authCtx.isRegisterClickButton();
  };

  return (
    <Card>
      <img className={classes.img} src={userImage} />
      <p>Welcome</p>
      <p>Register</p>
      <LoginForm registerButton={isRegisterButton} />
      <div className={classes['register']}>
        <Button onClick={registerClickHandler}>Register</Button>
      </div>
    </Card>
  );
};

export default Register;
