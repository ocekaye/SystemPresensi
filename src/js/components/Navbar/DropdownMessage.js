/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class DropdownMessage extends React.Component {
    render() {
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="icon-bubbles4"></i>
                    <span className="visible-xs-inline-block position-right">Messages</span>
                    <span className="badge bg-warning-400">2</span>
                </a>

                <div className="dropdown-menu dropdown-content width-350">
                    <div className="dropdown-content-heading">
                        Messages
                        <ul className="icons-list">
                            <li><a href="#"><i className="icon-compose"></i></a></li>
                        </ul>
                    </div>

                    <ul className="media-list dropdown-content-body">
                        <li className="media">
                            <div className="media-left">
                                <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                <span className="badge bg-danger-400 media-badge">5</span>
                            </div>

                            <div className="media-body">
                                <a href="#" className="media-heading">
                                    <span className="text-semibold">James Alexander</span>
                                    <span className="media-annotation pull-right">04:58</span>
                                </a>

                                <span className="text-muted">who knows, maybe that would be the best thing for me...</span>
                            </div>
                        </li>

                        <li className="media">
                            <div className="media-left">
                                <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                <span className="badge bg-danger-400 media-badge">4</span>
                            </div>

                            <div className="media-body">
                                <a href="#" className="media-heading">
                                    <span className="text-semibold">Margo Baker</span>
                                    <span className="media-annotation pull-right">12:16</span>
                                </a>

                                <span className="text-muted">That was something he was unable to do because...</span>
                            </div>
                        </li>

                        <li className="media">
                            <div className="media-left"><img src="assets/images/users/1.png" className="img-circle img-sm" alt="" /></div>
                            <div className="media-body">
                                <a href="#" className="media-heading">
                                    <span className="text-semibold">Jeremy Victorino</span>
                                    <span className="media-annotation pull-right">22:48</span>
                                </a>

                                <span className="text-muted">But that would be extremely strained and suspicious...</span>
                            </div>
                        </li>

                        <li className="media">
                            <div className="media-left"><img src="assets/images/users/1.png" className="img-circle img-sm" alt="" /></div>
                            <div className="media-body">
                                <a href="#" className="media-heading">
                                    <span className="text-semibold">Beatrix Diaz</span>
                                    <span className="media-annotation pull-right">Tue</span>
                                </a>

                                <span className="text-muted">What a strenuous career it is that I've chosen...</span>
                            </div>
                        </li>

                        <li className="media">
                            <div className="media-left"><img src="assets/images/users/1.png" className="img-circle img-sm" alt="" /></div>
                            <div className="media-body">
                                <a href="#" className="media-heading">
                                    <span className="text-semibold">Richard Vango</span>
                                    <span className="media-annotation pull-right">Mon</span>
                                </a>

                                <span className="text-muted">Other travelling salesmen live a life of luxury...</span>
                            </div>
                        </li>
                    </ul>

                    <div className="dropdown-content-footer">
                        <a href="#" data-popup="tooltip" title="All messages"><i className="icon-menu display-block"></i></a>
                    </div>
                </div>
            </li>
        );
    }
}