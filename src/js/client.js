import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory, withRouter } from 'react-router';

import store from './store';

import Navbar from './components/Navbar';
import Home from './components/Home';
import PageHeader from './components/PageHeader';
import DaftarSiswa from './components/DaftarSiswa';
import Nilai from './components/Nilai';
import Login from './components/Login';
import Jadwal from './components/Jadwal';
import Tugas from './components/Tugas';
import CreateTugas from './components/Tugas/CreateTugas';


const app = document.getElementById('app');

@withRouter
class goIn extends React.Component{
    componentWillMount(){
        this.props.router.replace('/app/home');
    }
    render(){
        return(<div></div>);
    }

}

ReactDOM.render(
    <Provider store={store}>

        <Router history={hashHistory}>
            <Route path='/' component={goIn} />
            <Route path='/app' component={Navbar}>
                <IndexRoute component={Home} />
                <Route path='home' component={Home} />
                <Route path='nilai/:parm' component={Nilai} />
                <Route path='blank' />
                <Route path='header' component={PageHeader} />
                <Route path='daftar-siswa' component={DaftarSiswa} />
                <Route path='jadwal' component={Jadwal} />
                <Route path='tugas'>
                    <Route path='all' component={Tugas} isAll={true}/>
                    <Route path='create' component={CreateTugas}/>
                    <Route path=':id' component={Tugas} isAll={false}/>

                </Route>
            </Route>
            <Route path="/login" component={Login}/>
            {/*<Home />*/}
        </Router>
    </Provider>
    , app);
