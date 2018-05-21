// https://api.discogs.com/users/willwill_/collection/folders/0/releases

import React, {Component} from 'react';
import {List, ListItem, ListItemText, FontIcon, CircularProgress} from '@material-ui/core';
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
                    let fullArtistName = item.basic_information.artists.map(e => e.name).join(' / ');
                    return (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.basic_information.title}
                                secondary={fullArtistName}
                            />
                        </ListItem>
                    );
                })}
            </List>
        );
	}
};

export default ListReleases;

