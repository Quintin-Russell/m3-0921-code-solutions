import React from 'react';
import ReactDOM from 'react-dom';

const el = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(
  el,
  document.querySelector('#root')
);
