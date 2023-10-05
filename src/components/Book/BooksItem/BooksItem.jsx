import classes from './BooksItem.module.css';

const BooksItem = (props) => {
  return (
    <li className={classes.book}>
      <div className={classes['book-details']}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.writer}>{props.writer}</p>
      </div>
    </li>
  );
};

export default BooksItem;
