import BooksItem from '../BooksItem';

import classes from './BooksList.module.css';

const BooksList = () => {
  const BOOKS_LİST = [
    {
      id: 'B1',
      name: 'Book1',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B2',
      name: 'Book2',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B3',
      name: 'Book3',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B4',
      name: 'Book4',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B5',
      name: 'Book5',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B6',
      name: 'Book6',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B7',
      name: 'Book7',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
    {
      id: 'B8',
      name: 'Book8',
      description: 'Lorem ipsum dolor sit, amet.',
      writer: 'Lorem ipsum',
    },
  ];

  const bookItem = BOOKS_LİST.map((book) => (
    <BooksItem
      name={book.name}
      key={book.id}
      description={book.description}
      writer={book.writer}
    />
  ));

  return (
    <section className={classes.book}>
      <ul>{bookItem}</ul>
    </section>
  );
};

export default BooksList;
