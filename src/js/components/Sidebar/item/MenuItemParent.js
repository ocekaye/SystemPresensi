/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import MenuItem from './MenuItem';

export default class MenuItemParent extends React.Component {

    render() {
        return (
            <li>
                <a href={this.props.link}><i className={this.props.icon} /> <span>{this.props.name}</span></a>
                <ul>
                    {this.props.children}
                </ul>
            </li>
        );
    }
}