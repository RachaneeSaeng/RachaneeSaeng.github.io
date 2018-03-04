
import Promise from 'promise-polyfill'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// require("expose-loader?React!react");
// require("expose-loader?ReactDOM!react-dom");
// require('expose-loader?Components!./components');



ReactDOM.render(<AppHeader/>, document.getElementById('content'));