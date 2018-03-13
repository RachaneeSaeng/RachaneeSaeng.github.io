
import Promise from 'promise-polyfill'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Layout/>, document.getElementById('app'));