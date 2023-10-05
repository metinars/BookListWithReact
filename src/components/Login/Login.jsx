import { useContext, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import LoginForm from './LoginForm';
import AuthContext from '../../store/auth-context';

import classes from './Login.module.css';
import userImage from '../../assets/user.png';

const Login = () => {
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
      <p>Login</p>
      <LoginForm registerButton={isRegisterButton} />
      <div className={classes['register']}>
        <Button onClick={registerClickHandler}>Login</Button>
      </div>
    </Card>
  );
};

export default Login;
