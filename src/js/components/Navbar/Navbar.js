/**
 * Created by Hinata on 2/27/2017.
 */
import React from 'react';
import Script from 'react-load-script';
import NavbarHeader from './NavbarHeader.js';
import NavbarCollapse from './NavbarCollapse.js';
import Sidebar from '../Sidebar';

export default class Navbar extends React.Component {
    render() {
        let base = location.protocol + '//' + location.host +'/'
        return (
        <div>
            {/*<!-- Core JS files -->*/}
           {/* <Script
                url={base+'assets/js/plugins/loaders/pace.min.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>
            <Script
                url={base+'assets/js/core/libraries/jquery.min.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>
            <Script
                url={base+'assets/js/core/libraries/bootstrap.min.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>
            <Script
                url={base+'assets/js/plugins/loaders/blockui.min.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>*/}
            {/*<!-- /core JS files -->*/}


            {/*<!-- Theme JS files -->*/}
           {/* <Script
                url={base+'assets/js/core/app.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>
            <Script
                url={base+'assets/js/pages/dashboard.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>
            <Script
                url={base+'assets/js/pages/layout_fixed_custom.js'}
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}/>*/}
            {/*<!-- /theme JS files -->*/}

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