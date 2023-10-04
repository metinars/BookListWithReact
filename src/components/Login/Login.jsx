import { useContext, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import useInput from '../../hooks/use-input';
import AuthContext, { AuthContextProvider } from '../../store/auth-context';

import classes from './Login.module.css';
import userImage from '../../assets/user.png';

const isEmail = (value) => value.includes('@');
const isPassword = (value) => value.trim().length > 6;

const Login = () => {
  const [isRegisterButton, setIsRegisterButton] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChanceHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChanceHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isPassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      authCtx.onLogin(emailValue, passwordValue);
      <AuthContextProvider
        emailData={emailValue}
        passwordData={passwordValue}
      />;
    }

    if (!formIsValid) {
      return;
    }

    // console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();
  };

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = passwordHasError
    ? 'form-control invalid'
    : 'form-control';

  const registerClickHandler = () => {
    !isRegisterButton ? setIsRegisterButton(true) : setIsRegisterButton(false);
  };

  return (
    <Card>
      <img className={classes.img} src={userImage} />
      <p>Welcome</p>
      <p>{!isRegisterButton ? 'Sign In' : 'Sing Up'}</p>
      <form onSubmit={submitHandler}>
        <div className={classes['control-group']}>
          <div className={classes[emailClasses]}>
            <input
              type='text'
              id='email'
              placeholder='Email'
              value={emailValue}
              onChange={emailChanceHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className='error-text'>Please enter a email.</p>
            )}
          </div>
          <div className={classes[passwordClasses]}>
            <input
              type='text'
              id='password'
              placeholder='Password'
              value={passwordValue}
              onChange={passwordChanceHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className='error-text'>Please enter a password.</p>
            )}
          </div>
        </div>
        <div className={classes.actions}>
          <Button type='submit' disabled={!formIsValid} className={classes.btn}>
            {!isRegisterButton ? 'Login' : 'Sign Up'}
          </Button>
        </div>
      </form>
      <div className={classes['register']}>
        <button onClick={registerClickHandler}>
          {isRegisterButton ? 'Login' : 'Sign Up'}
        </button>
      </div>
    </Card>
  );
};

export default Login;
