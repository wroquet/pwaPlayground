import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import ListReleases from './components/ListReleases';

const App = () => {

    return (
        <MuiThemeProvider>
            <ListReleases />
        </MuiThemeProvider>
    );

};

export default App;

