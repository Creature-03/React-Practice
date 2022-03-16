import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.style.css';

function BookList(){
  return (
    <>
      <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => {
  return <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250" alt="" />
}

const Title = () => {
  return <h1>Coolest Book Ever</h1>
}

const Author = () => {
  return <h4 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'0.25rem'}}>Yours Truly</h4>
}
 
ReactDOM.render(<BookList/>, document.getElementById('root'));