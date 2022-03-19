import React from 'react';
import ReactDOM from 'react-dom';

//JSX

// function Greeting(){
//   return <h4>Hello World</h4>;
// }

// ==

// const Greeting = () => {
//   return React.createElement('h4', {}, 'Hello World');
// }

// -----------------------

// function Greeting(){
//   return <div>
//     <h1>
//       hello world
//     </h1>
//   </div>
// }

// ==

// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {},
//     React.createElement(
//       'h1',
//       {},
//       'hello world') 
//   );
// }



// -----------------------

// return single jsx element, wrap in div or fragment
// use camelCase for html attributes, onclick == onClick
// 'class' doesn't work in jsx elements, html class == className
// close every element, including self closeing, <img />
// jsx wrapped in () not {}




// ******************************

// Destructuring 

// const Book = ({ cover, coverAlt, title, author }) => {
//     return <article className='book'>
//       <img src={cover} alt={coverAlt} className='w250px' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   }

// ==

// const Book = (props) => {
//     const { cover. coverAlt, title, author } = props;
//     return <article className='book'>
//       <img src={cover} alt={coverAlt} className='w250px' />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   }

// ==

// const Book = (props) => {
//     return <article className='book'>
//       <img src={props.cover} alt={props.coverAlt} className='w250px' />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   }



// ******************************