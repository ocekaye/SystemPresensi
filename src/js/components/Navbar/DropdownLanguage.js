/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class DropdownLanguage extends React.Component {
    render() {
        return (
            <li className="dropdown language-switch">
                <a className="dropdown-toggle" data-toggle="dropdown">
                    <img src="assets/images/flags/id.png" className="position-left" alt="" />
                    Indonesia
                    <span className="caret"></span>
                </a>

                <ul className="dropdown-menu">
                    <li><a className="indonesia"><img src="assets/images/flags/id.png" alt="" /> Indonesia</a></li>
                    <li><a className="english"><img src="assets/images/flags/gb.png" alt="" /> English</a></li>
                </ul>
            </li>
        );
    }
}