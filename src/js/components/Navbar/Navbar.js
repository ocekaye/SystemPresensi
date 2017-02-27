/**
 * Created by Hinata on 2/27/2017.
 */
import React from 'react';
import NavbarHeader from './NavbarHeader.js';
import NavbarCollapse from './NavbarCollapse.js';

export default class Navbar extends React.Component {
    render() {
        return (

            <div className="navbar navbar-inverse navbar-fixed-top">
                <NavbarHeader/>
                <NavbarCollapse/>
            </div>

        );
    }
}