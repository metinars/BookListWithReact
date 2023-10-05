/* eslint-disable react/prop-types */

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className={
        props.className === undefined ? classes.card : classes[props.className]
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
