import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const App = () => (
    <MuiThemeProvider>
        <AppBar title="My AppBar" />
        <p>Hello pwa</p>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
