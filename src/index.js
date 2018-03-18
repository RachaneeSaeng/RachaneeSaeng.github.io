

import React from 'react'; 
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';

// To add to window
import Promise from 'promise-polyfill'; 
if (!window.Promise) {
    window.Promise = Promise;
}

//inject tab event
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<Layout/>, document.getElementById('app'));