/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import axios from 'axios';
import { API_BASE, webStorage, getAccount } from '../../utils';

export default class UserProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: null
        }
    }

    componentWillMount() {
        // const { params } = this.props;
        this.setState({profile: getAccount()});
    }

    render() {
        let self = this;

        const {profile} = this.state;
        let profileRen = {
            nama : "",
            alamat :""
        };

        if (profile != null)profileRen = profile;

        return (
            <div className="sidebar-user">
                <div className="category-content">
                    <div className="media">
                        <a href="#" className="media-left"><img src="assets/images/users/1.png" className="img-circle img-sm" alt="" /></a>
                        <div className="media-body">
                            <span className="media-heading text-semibold">{profileRen.nama}</span>
                            <div className="text-size-mini text-muted">
                                <i className="icon-pin text-size-small"></i> &nbsp;{profileRen.alamat}
                            </div>
                        </div>

                        <div className="media-right media-middle">
                            <ul className="icons-list">
                                <li>
                                    <a href="#"><i className="icon-cog3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}