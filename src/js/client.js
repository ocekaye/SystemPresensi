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
import Input from './components/Nilai/Input';
import Login from './components/Login';
import Jadwal from './components/Jadwal';
import Tugas from './components/Tugas';
import CreateTugas from './components/Tugas/CreateTugas';
import Presensi from './components/Presensi';
import DaftarKelas from './components/DaftarKelas';
import DaftarGuru from './components/DaftarGuru';
import TambahKelas from './components/DaftarKelas/TambahKelas';
import TambahGuru from './components/DaftarGuru/TambahGuru.js';
import TambahSiswa from './components/DaftarSiswa/TambahSiswa.js';



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
                <Route path='nilai' >
                    <Route path='input/:kelasId/:tugasId' component={Input} />
                    <Route path='page/:parm' component={Nilai} />
                </Route>
                <Route path='blank' />
                <Route path='header' component={PageHeader} />

                <Route path='siswa'>
                  <Route path='tampil' component={DaftarSiswa}/>
                  <Route path='tambah' component={TambahSiswa}/>

                </Route>
                <Route path='jadwal' component={Jadwal} />
                <Route path='tugas'>
                    <Route path='all' component={Tugas} isAll={true}/>
                    <Route path='create' component={CreateTugas}/>
                    <Route path=':id' component={Tugas} isAll={false}/>
                </Route>
                <Route path='presensi' component={Presensi}/>
                <Route path='kelas'>
                    <Route path='tampil' component={DaftarKelas}/>
                    <Route path='tambah' component={TambahKelas}/>

                </Route>

              <Route path='guru'>
                <Route path='tampil' component={DaftarGuru}/>
                <Route path='tambah' component={TambahGuru}/>

              </Route>





            </Route>
            <Route path="/login" component={Login}/>
            {/*<Home />*/}
        </Router>
    </Provider>
    , app);
