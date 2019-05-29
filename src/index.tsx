import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// @ts-ignore ts2691
import App from './App.tsx';
// @ts-ignore ts2691
import * as serviceWorker from './serviceWorker.ts';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
