/**
 * Created by Hinata on 2/27/2017.
 */
import React from 'react';

import DropdownLanguage from './DropdownLanguage';
import DropdownMessage from './DropdownMessage';
import DropdownProfile from './DropdownProfile';

export default class NavbarCollapse extends React.Component {
    render() {
        return (
            <div className="navbar-collapse collapse" id="navbar-mobile">
                <ul className="nav navbar-nav">

                </ul>

                <ul className="nav navbar-nav navbar-right">

                    <DropdownProfile/>
                </ul>
            </div>
        );
    }
}