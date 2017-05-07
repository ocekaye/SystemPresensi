/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import {webStorage} from '../../utils';
import { withRouter } from 'react-router';

@withRouter
export default class DropdownProfile extends React.Component {

    logOut(){
        webStorage.removeItem('token');
        this.props.router.replace('/login');
    }

    render() {
        return (
            <li className="dropdown dropdown-user">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <img src="assets/images/users/1.png" alt="" />
                    <span>Nama Guru</span>
                    <i className="caret" />
                </a>

                <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i className="icon-user-plus"/> My profile</a></li>
                    <li><a href="#"><span className="badge bg-teal-400 pull-right">58</span> <i className="icon-comment-discussion" /> Messages</a></li>
                    <li className="divider" />
                    <li><a href="#"><i className="icon-cog5" /> Account settings</a></li>
                    <li onClick={() => this.logOut()}><a href="#"><i className="icon-switch2" /> Logout</a></li>
                </ul>
            </li>
        );
    }
}