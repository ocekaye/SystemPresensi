/**
 * Created by Hinata on 2/27/2017.
 */
import React from 'react';

export default class NavbarHeader extends React.Component {
    render() {
        return (
            <div className="navbar-header">
                <div className="nav navbar-nav">
                    <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
                </div>
                <a className="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="" /></a>

                <ul className="nav navbar-nav visible-xs-block">
                    <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                    <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                </ul>

            </div>
        );
    }
}