import React from 'react';
import * as ReactDOM from 'react-dom/client';

const newEle = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('new element: ', newEle);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(newEle);
