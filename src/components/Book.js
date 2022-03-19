import React from 'react'

const Book = ({ cover, coverAlt, title, author }) => {
    // functions
    const clickHandler = (title, author) => {
      alert(`${title} by ${author}`)
    };
  
    // return
    return <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={cover} alt={coverAlt} className='w250px'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={() => clickHandler(title, author)}>Example</button>
    </article>
};

export default Book