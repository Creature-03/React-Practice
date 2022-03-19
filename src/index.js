import React from 'react';
import ReactDOM from 'react-dom';

//components
import { books } from './components/booksList';
import Book from './components/Book';


// CSS
import './index.style.css';
// variables



function BookList(){
document.getElementsByClassName('bookDesc')
  return (
    <>
      <section className='booklist'>
        {books.map((book)=>{
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
}


 
ReactDOM.render(<BookList/>, document.getElementById('root'));