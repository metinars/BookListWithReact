import { useContext } from 'react';

import Input from '../../UI/Input';
import Button from '../../UI/Button';
import AuthContext from '../../../store/auth-context';

import useInput from '../../../hooks/use-input';

import classes from './Loginform.module.css';

const isEmail = (value) => value.includes('@');
const isPassword = (value) => value.trim().length > 6;

const LoginForm = (props) => {
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
    }

    if (!formIsValid) {
      return;
    }

    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword();
  };

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = passwordHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['control-group']}>
        <Input
          className={emailClasses}
          input={{
            type: 'text',
            id: 'email',
            placeholder: 'Email',
            value: emailValue,
          }}
          onChange={emailChanceHandler}
          onBlur={emailBlurHandler}
          emailHasError={emailHasError}
        />
        <Input
          className={passwordClasses}
          input={{
            type: 'text',
            id: 'password',
            placeholder: 'Password',
            value: passwordValue,
          }}
          onChange={passwordChanceHandler}
          onBlur={passwordBlurHandler}
          passwordHasError={passwordHasError}
        />
      </div>
      <div className={classes.actions}>
        <Button type='submit' disabled={!formIsValid} className={classes.btn}>
          {props.registerButton ? 'Sign Up' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
