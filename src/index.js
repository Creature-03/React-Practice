import React from 'react';
import ReactDOM from 'react-dom';

//components
import { books as booksData } from './components/booksList';
import Book from './components/Book';

// CSS
import './index.style.css';

function BookList(){
document.getElementsByClassName('bookDesc')
  return (
    <>
      <section className='booklist'>
        {booksData.map((book)=>{
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<BookList/>, document.getElementById('root'));