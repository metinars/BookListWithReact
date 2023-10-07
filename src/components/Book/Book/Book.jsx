import Card from '../../UI/Card';
import Header from '../../Common/Header';
import AddBook from '../AddBook';
import BooksList from '../BooksList';
import { Fragment } from 'react';

const Book = () => {
  return (
    <Fragment>
      <Header />
      <AddBook />
      <Card className={'card-book'}>
        <BooksList />
      </Card>
    </Fragment>
  );
};

export default Book;
