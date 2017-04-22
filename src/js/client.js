import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import store from './store';

import Navbar from './components/Navbar';
import Home from './components/Home';
import PageHeader from './components/PageHeader';
import DaftarSiswa from './components/DaftarSiswa';
import Nilai from './components/Nilai';

const app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>

        <Router history={hashHistory}>
            <Route path='/' component={Navbar}>
                <IndexRoute component={Home} />
                <Route path='home' component={Home} />
                <Route path='nilai/:parm' component={Nilai} />
                <Route path='blank' />
                <Route path='header' component={PageHeader} />
                <Route path='daftar-siswa' component={DaftarSiswa} />
            </Route>
            <Home />
        </Router>
    </Provider>
    , app);

