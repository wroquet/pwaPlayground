import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

/* if ('serviceWorker' in navigator) {
    const registration = runtime.register();
} */

ReactDOM.render(<App />, document.getElementById('app'));


