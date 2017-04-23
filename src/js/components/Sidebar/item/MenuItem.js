/**
 * Created by Hinata on 4/21/2017.
 */
import React from 'react';
import {Link} from 'react-router'

export default class MenuItem extends React.Component {
    render() {
        return (
            <li>
                <a href={"#/"+this.props.link}> <i className={this.props.icon} />{this.props.name}</a>
            </li>
        );
    }
}