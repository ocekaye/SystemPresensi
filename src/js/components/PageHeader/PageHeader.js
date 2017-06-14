/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
        <div className="page-header page-header-default">
            <div className="page-header-content">
                <div className="page-title">
                    <h4><i className={this.props.icon} /> <span className="text-semibold">{this.props.text1}</span> {this.props.text2 ? " - "+this.props.text2 : ""}</h4>
                </div>

                <div className="heading-elements">
                    <div className="heading-btn-group">
                        {this.props.children}
                    </div>
                </div>
            </div>

            <div className="breadcrumb-line">
                <ul className="breadcrumb">
                    <li><a href="index.html"><i className="icon-home2 position-left"/> Home</a></li>
                    <li className="active">Dashboard</li>
                </ul>

                <ul className="breadcrumb-elements">
                    <li><a href="#"><i className="icon-comment-discussion position-left"/> Support</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="icon-gear position-left"/>
                            Settings
                            <span className="caret"/>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#"><i className="icon-user-lock"/> Account security</a></li>
                            <li><a href="#"><i className="icon-statistics"/> Analytics</a></li>
                            <li><a href="#"><i className="icon-accessibility"/> Accessibility</a></li>
                            <li className="divider"/>
                            <li><a href="#"><i className="icon-gear"/> All settings</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
