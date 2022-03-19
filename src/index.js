import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.style.css';
// variables
const bookOne = {
  cover: 'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250',
  coverAlt: 'a book',
  title: 'Coolest Book Ever',
  author: 'Amelia Airheart',
};
const bookTwo = {
  cover: 'https://images.pexels.com/photos/161366/book-book-pages-book-cover-font-161366.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  coverAlt: 'an old book',
  title: 'Oldest Book Ever',
  author: 'Thug the Cavedude',
};


function BookList(){
  return (
    <>
      <section className='booklist'>
        <Book 
          cover={bookOne.cover} 
          coverAlt={bookOne.coverAlt} 
          title={bookOne.title} 
          author={bookOne.author} 
        />
        <Book 
          cover={bookTwo.cover} 
          coverAlt={bookTwo.coverAlt} 
          title={bookTwo.title} 
          author={bookTwo.author} 
        />
      </section>
    </>
  );
}

const Book = ({ cover, coverAlt, title, author }) => {
  return <article className='book'>
    <img src={cover} alt={coverAlt} className='w250px' />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}
 
ReactDOM.render(<BookList/>, document.getElementById('root'));