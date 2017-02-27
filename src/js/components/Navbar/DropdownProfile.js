/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class DropdownProfile extends React.Component {
    render() {
        return (
            <li className="dropdown dropdown-user">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <img src="assets/images/users/1.png" alt="" />
                    <span>Nama Guru</span>
                    <i className="caret"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
                    <li><a href="#"><span className="badge bg-teal-400 pull-right">58</span> <i className="icon-comment-discussion"></i> Messages</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
                    <li><a href="#"><i className="icon-switch2"></i> Logout</a></li>
                </ul>
            </li>
        );
    }
}