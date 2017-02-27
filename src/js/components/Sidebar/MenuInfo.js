/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class MenuInfo extends React.Component {
    render() {
        return (
            <div>
                <li className="navigation-header"><span>Info</span> <i className="icon-menu" title="Info"></i></li>
                <li>
                    <a href="#"><i className="icon-calendar52"></i> <span>Jadwal</span></a>
                </li>
            </div>
        );
    }
}