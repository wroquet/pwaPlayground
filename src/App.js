import React from 'react';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Toolbar, Typography, FlatButton} from '@material-ui/core';
import ListReleases from './components/ListReleases';
// import Logged from './components/Logged';
// import Login from './components/Login';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            logged: true,
        };
    }

    render() {
        return  (
                <section>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                My discogs app
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <ListReleases />
                </section>
        );
    };
};

export default App;

