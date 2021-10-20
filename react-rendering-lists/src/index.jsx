import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const el =
    <ul>
      {pokedex.map(val => {
        return <li key={ val.number }>{ val.name }</li>;
      })
      }
        </ul>;

ReactDOM.render(
  el,
  document.getElementById('root')
);
