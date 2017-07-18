/**
 * Created by Hinata on 2/27/2017.
 */
import React from 'react';
import Script from 'react-load-script';
import NavbarHeader from './NavbarHeader.js';
import NavbarCollapse from './NavbarCollapse.js';
import Sidebar from '../Sidebar';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { checkLogin } from "../../actions/accountActions"

import { webStorage, isLogin } from '../../utils';

@withRouter
export default class Navbar extends React.Component {
    componentWillMount() {
        if (!isLogin()) this.props.router.replace('/login');
    }

    render() {
        let base = location.protocol + '//' + location.host +'/'
        return (
        <div>
            <div className="navbar navbar-inverse navbar-fixed-top">
                <NavbarHeader/>
                <NavbarCollapse/>
            </div>
            <div className="page-container">
                <div className="page-content">
                    <Sidebar/>
                    <div className="content-wrapper">
                        {this.props.children}
                        </div>
                </div>
            </div>
        </div>
        );
    }

    handleScriptCreate(){
        this.setState({ scriptLoaded: false });
    }

    handleScriptError(){
        this.setState({ scriptError: true });
    }

    handleScriptLoad(){
        this.setState({ scriptLoaded: true });
    }
}