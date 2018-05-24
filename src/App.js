import React from 'react';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Toolbar, Typography, FlatButton, Button} from '@material-ui/core';
import ListReleases from './components/ListReleases';
import TestLabel from './components/TestLabel';
import MenuAppBar from './components/MenuAppBar';

// import Logged from './components/Logged';
// import Login from './components/Login';

import main from './stylesheets/main.scss';

import TestContext from './contexts/TestContext';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            number: 0
        };
        this.IncrementNum = this.IncrementNum.bind(this);
    }

    IncrementNum () {
        this.setState({
            number: this.state.number + 1
        });
    };

    render() {
        let test = true;
        return  (
            <section>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            My discogs app
                        </Typography>
                    </Toolbar>
                    <Button color="inherit">Login</Button>
                </AppBar>
                <TestContext.Provider value={this.state.number}>
                    <MenuAppBar />
                    <Button size="medium" onClick={this.IncrementNum}>
                        Increment
                    </Button>
                    <TestLabel />
                </TestContext.Provider>
                <ListReleases />
            </section>
        );
    };
};

export default App;

