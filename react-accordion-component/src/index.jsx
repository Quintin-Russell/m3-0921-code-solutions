import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const headers = [
  {
    title: 'CSS',
    text: 'CSS is awesome, but sometimes frustrating',
    key: '01'
  },
  {
    title: 'HTML',
    text: 'HTML is cool',
    key: '02'
  },
  {
    title: 'JavaScript',
    text: 'JS is also really cool',
    key: '03'
  }
];

ReactDOM.render(
  <Accordion
  headers={headers}/>,
  document.getElementById('root')
);
