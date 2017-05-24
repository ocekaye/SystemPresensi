/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import MenuItem from './MenuItem';
import {Link, withRouter} from "react-router";

@withRouter
export default class MenuItemParent extends React.Component {

    componentWillMount(){

    }

    render() {
        let isActive = this.props.location.pathname == ("/"+this.props.to) ? true : false,
            className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Link {...this.props}>
                    <i className={this.props.icon} /> <span>{this.props.name}</span>
                </Link>
                {/*<a href={this.props.link}><i className={this.props.icon} /> <span>{this.props.name}</span></a>*/}
                <ul>
                    {this.props.children}
                </ul>
            </li>
        );
    }
}