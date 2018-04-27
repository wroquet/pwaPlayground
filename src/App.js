import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

const App = () => {
    return (
        <MuiThemeProvider>
            <MyAwesomeReactComponent />
        </MuiThemeProvider>
    );
};

export default App;

