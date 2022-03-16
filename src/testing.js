import React from 'react';
import ReactDOM from 'react-dom';

//WHY HTML? HERE'S WHY

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




// -----------------------