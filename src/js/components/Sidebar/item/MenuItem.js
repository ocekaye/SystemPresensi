/**
 * Created by Hinata on 4/21/2017.
 */
import React from 'react';
import {Link, withRouter} from "react-router";

@withRouter
export default class MenuItem extends React.Component {
    componentWillMount(){

    }
    render() {
        console.log('menuitem', this.props);
        let isActive = this.props.location.pathname == ("/"+this.props.to) ? true : false,
            className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Link {...this.props}>
                    <i className={this.props.icon} /> <span>{this.props.name}</span>
                </Link>
            </li>
        );
    }
}