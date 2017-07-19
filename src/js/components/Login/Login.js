/**
 * Created by Hinata on 5/7/2017.
 */
import React from 'react';
import {webStorage} from '../../utils';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { checkLogin, login, getAccount } from "../../actions/accountActions";
import { isLogin, baseUrl } from '../../utils';

@withRouter
@connect((state) => state)
export default class Login extends React.Component {

    login(e){

        e.preventDefault();
        const {dispatch} =  this.props;
        dispatch(login('guru1', '123')).then(function (id) {
            console.log('login page', id);
            dispatch(getAccount(id)).then(function (id) {
                window.open(baseUrl, "_self");
            });
        });

    }

    render() {
        return (
            <div className="login-container">
                <div className="page-container">
                    <div className="page-content">
                        <div className="content-wrapper">
                            <div className="content">
                                <form onSubmit={::this.login}>
                                    <div className="panel panel-body login-form">
                                        <div className="text-center">
                                            <div className="icon-object border-slate-300 text-slate-300"><i className="icon-reading"></i></div>
                                            <h5 className="content-group">Login to your account <small className="display-block">Enter your credentials below</small></h5>
                                        </div>
                                        <div className="form-group has-feedback has-feedback-left">
                                            <input type="text" className="form-control" placeholder="Username" />
                                                <div className="form-control-feedback">
                                                    <i className="icon-user text-muted"></i>
                                                </div>
                                        </div>

                                        <div className="form-group has-feedback has-feedback-left">
                                            <input type="password" className="form-control" placeholder="Password" />
                                                <div className="form-control-feedback">
                                                    <i className="icon-lock2 text-muted"></i>
                                                </div>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Sign in <i className="icon-circle-right2 position-right"></i></button>
                                        </div>

                                        <div className="text-center">
                                            <a href="login_password_recover.html">Forgot password?</a>
                                        </div>
                                    </div>
                                </form>
                                <div className="footer text-muted text-center">
                                    &copy; 2015. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}