import Card from '../../UI/Card';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import useInput from '../../../hooks/use-input';

import classes from './AddBook.module.css';

const isBook = (value) => value.trim().length > 1;

const AddBook = () => {
  const {
    value: bookName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isBook);

  const {
    value: description,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptione,
  } = useInput(isBook);

  const {
    value: writer,
    isValid: writerIsValid,
    hasError: writerHasError,
    valueChangeHandler: writerChangeHandler,
    inputBlurHandler: writerBlurHandler,
    reset: resetWriter,
  } = useInput(isBook);

  let addBookFormIsValid = false;

  if (nameIsValid && descriptionIsValid && writerIsValid) {
    addBookFormIsValid = true;
  }

  const submitAddBookHandler = (event) => {
    event.preventDefault();

    if (!addBookFormIsValid) {
      return;
    }

    console.log(bookName, description, writer);

    const bookData = {
      id: bookName + Math.random(),
      bookName: bookName,
      description: description,
      writer: writer,
    };

    addDataToFirebase(bookData);

    resetName();
    resetDescriptione();
    resetWriter();
  };

  const addDataToFirebase = async (data) => {
    await fetch(
      'https://book-list-7f724-default-rtdb.firebaseio.com/books.json',
      {
        method: 'POST',
        body: JSON.stringify({
          book: data,
        }),
      }
    );
  };

  const bookNameClasses = nameHasError ? 'control invalid' : 'control';
  const descriptionClasses = descriptionHasError
    ? 'control invalid'
    : 'control';
  const writerClasses = writerHasError ? 'control invalid' : 'control';

  return (
    <Card className={'card-book'}>
      <form onSubmit={submitAddBookHandler} className={classes.form}>
        <div className=''>
          <Input
            className={bookNameClasses}
            label='Name'
            input={{
              id: 'name',
              type: 'text',
              value: bookName,
            }}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            bookNameHasError={nameHasError}
          />
          <Input
            className={descriptionClasses}
            label='Description'
            input={{
              id: 'description',
              type: 'text',
              value: description,
            }}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            bookNameHasError={descriptionHasError}
          />
          <Input
            className={writerClasses}
            label='Writer'
            input={{
              id: 'writer',
              type: 'text',
              value: writer,
            }}
            onChange={writerChangeHandler}
            onBlur={writerBlurHandler}
            bookNameHasError={writerHasError}
          />
        </div>
        <div>
          <Button type='submit' disabled={!addBookFormIsValid}>
            Add
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddBook;
