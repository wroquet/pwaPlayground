import React, { Component } from 'react';
import {Badge, MailIcon} from '@material-ui/core';

import TestContext from '../contexts/TestContext';

class TestLabel extends Component {
    render () {
        return (
            <TestContext.Consumer>
                {value => (value)}
            </TestContext.Consumer>
        )
    }
}

export default TestLabel
