/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import {webStorage, getAccount} from '../../utils';
import { withRouter } from 'react-router';

@withRouter
export default class DropdownProfile extends React.Component {
    state = {
        profile: {}
    }
    componentWillMount() {
        this.setState({
            profile: getAccount()
        });
    }

    logOut(){
        webStorage.removeItem('token');
        this.props.router.replace('/login');
    }

    render() {
        const {profile} = this.state;
        return (
            <li className="dropdown dropdown-user">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <img src="assets/images/users/1.png" alt="" />
                    <span>{profile.nama}</span>
                    <i className="caret" />
                </a>

                <ul className="dropdown-menu dropdown-menu-right">




                    <li onClick={() => this.logOut()}><a href="#"><i className="icon-switch2" /> Logout</a></li>
                </ul>
            </li>
        );
    }
}