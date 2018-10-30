import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';

// To add to window
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(<Layout />, document.getElementById('app'));
