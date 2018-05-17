// https://api.discogs.com/users/willwill_/collection/folders/0/releases

import React, {Component} from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';

class ListReleases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            releases: []
        };
    }

    componentDidMount() {
        axios.get('https://api.discogs.com/users/willwill_/wants')
            .then(response => {
                this.setState({
                    isLoading: false,
                    releases: response.data.wants
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        const { releases }  = this.state;
        if (this.state.isLoading) {
			return (
				<CircularProgress />
			)
		}
		return (
            <List>
                {releases.map(item => {
                    return (
                        <ListItem
                            key={item.id}
                            primaryText={item.basic_information.title}
                            leftAvatar={
                                <FontIcon className="muidocs-icon-communication-voicemail" />
                            }
                        />
                    )
                })}
            </List>
		);
	}
};

export default ListReleases;

