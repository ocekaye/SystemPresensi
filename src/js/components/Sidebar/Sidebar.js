/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import UserProfile from './UserProfile';
import NavMain from './NavMain';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar sidebar-main sidebar-fixed">
                <div className="sidebar-content">
                    <UserProfile/>
                    <NavMain/>
                </div>
            </div>
        );
    }
}