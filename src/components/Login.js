import React, {Component} from 'react'
import { FlatButton } from 'material-ui';

export class Login extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <FlatButton label="Login" />
        );
    }
}
