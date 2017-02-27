import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import Home from './components/Home';

const app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Home}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
    , app);