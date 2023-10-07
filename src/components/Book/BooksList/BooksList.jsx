import { useEffect, useState } from 'react';

import BooksItem from '../BooksItem';
import classes from './BooksList.module.css';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(
        'https://book-list-7f724-default-rtdb.firebaseio.com/books.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();

      const bookData = [];

      for (const key in responseData) {
        bookData.push({
          id: key,
          bookName: responseData[key].book.bookName,
          description: responseData[key].book.description,
          writer: responseData[key].book.writer,
        });
      }
      setBooks(bookData);
    };

    fetchBook().catch((err) => {
      console.log(err);
    });
  }, []);

  const bookItem = books.map((book) => (
    <BooksItem
      name={book.bookName}
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
