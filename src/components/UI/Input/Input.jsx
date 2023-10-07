import React from 'react';
import classes from './Input.module.css';

// eslint-disable-next-line react/display-name
const Input = (props) => {
  return (
    <div className={classes[props.className]}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input {...props.input} onChange={props.onChange} onBlur={props.onBlur} />
      {props.emailHasError && (
        <p className='error-text'>Please enter a email.</p>
      )}
      {props.passwordHasError && (
        <p className='error-text'>Please enter a password.</p>
      )}
    </div>
  );
};

export default Input;
