import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const imgArr = [
  {
    src: './img/WestbergWedding-937.jpg',
    alt: 'wedding-photo'
  },
  {
    src: './img/WestbergWedding-940.jpg',
    alt: 'wedding-photo'
  },
  {
    src: './img/WestbergWedding-993.jpg',
    alt: 'wedding-photo'
  },
  {
    src: './img/WestbergWedding-994.jpg',
    alt: 'wedding-photo'
  },
  {
    src: './img/WestbergWedding-1007.jpg',
    alt: 'wedding-photo'
  }
];

ReactDOM.render(
  <Carousel
  imgArr={imgArr} />,
  document.getElementById('root')
);
