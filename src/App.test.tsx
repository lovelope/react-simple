import React from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore ts2691
import App from './App.tsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
