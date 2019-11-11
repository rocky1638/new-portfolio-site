import React from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css';
import 'styles/shorthand.css';
import 'styles/animations.css';
import 'styles/fonts.css';
import 'styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// code highlighting in code blocks
hljs.initHighlightingOnLoad();
if ('ontouchstart' in document.documentElement) {
  document.body.style.cursor = 'pointer'
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
