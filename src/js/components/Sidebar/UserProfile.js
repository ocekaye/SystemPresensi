/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="sidebar-user">
                <div className="category-content">
                    <div className="media">
                        <a href="#" className="media-left"><img src="assets/images/users/1.png" className="img-circle img-sm" alt="" /></a>
                        <div className="media-body">
                            <span className="media-heading text-semibold">Nama Guru</span>
                            <div className="text-size-mini text-muted">
                                <i className="icon-pin text-size-small"></i> &nbsp;Purworejo, Jawa Tengah
                            </div>
                        </div>

                        <div className="media-right media-middle">
                            <ul className="icons-list">
                                <li>
                                    <a href="#"><i className="icon-cog3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}