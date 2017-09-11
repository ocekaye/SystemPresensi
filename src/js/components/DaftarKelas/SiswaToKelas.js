/**
 * Created by Hinata on 9/10/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import axios from 'axios';
import {API_BASE} from '../../utils';
import { withRouter } from 'react-router';

@withRouter
export default class SiswaToKelas extends React.Component {
    state = {
        kelas: {},
        siswaKelas: [],
        allSiswa: [],
        userDetail: {},
        onSearch: false
    }

    componentWillMount(){
        let self = this;
        axios.get(API_BASE + 'Kelas/'+this.props.params.id)
            .then(function (response) {
                self.setState({
                    kelas:response.data
                });
            }).catch(function (error) {
        });
        this.loadSiswaKelas();
    }

    loadSiswaKelas(){
        let self = this;
        axios.get(API_BASE + 'Kelas/'+this.props.params.id+'/siswa')
            .then(function (response) {
                self.setState({
                    siswaKelas:response.data
                });
                self.loadAllSiswa();
            }).catch(function (error) {
        });
    }

    loadAllSiswa(){
        let self = this;
        axios.get(API_BASE + 'siswas/')
            .then(function (response) {
                self.setState({
                    allSiswa:response.data
                });
            }).catch(function (error) {
        });
        this.setState({
            onSearch: false
        });
        if (this.cari != null){
            this.cari.value = '';
        }
    }

    showModalDetail(user){
        this.setState({userDetail: user});
    }

    checkSiswaInClass(siswa){
        return this.getIndexOfSiswa(siswa) >= 0
    }

    getIndexOfSiswa(siswa){
        for (var i = 0; i < this.state.siswaKelas.length; i++){
            if (this.state.siswaKelas[i].id === siswa.id){
                return i;
            }
        }
        return -1;
    }

    addSiswa(siswa){
        if (this.checkSiswaInClass(siswa)){
            this.removeSiswa(siswa);
            return;
        }
        axios.put(API_BASE + 'Kelas/'+this.state.kelas.id+'/siswa/rel/'+siswa.id)
            .then(function (response) {
               console.log(response.data);
            }).catch(function (error) {
        });

        let {siswaKelas}  =this.state;
        siswaKelas.push(siswa);
        this.setState({
            siswaKelas
        })
    };

    removeSiswa(siswa){
        axios.delete(API_BASE + 'Kelas/'+this.state.kelas.id+'/siswa/rel/'+siswa.id)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
        });
        let {siswaKelas}  =this.state;
        siswaKelas.splice(this.getIndexOfSiswa(siswa), 1);
        this.setState({
            siswaKelas
        })
    }

    search(e){
        // console.log('cari', this.cari == null ? 'null': this.cari);
        let kata = this.cari;
        let word = '';
        if (kata != null)
            word = kata.value.slice(1, kata.lenght);
        if(e.key === 'Enter'){
            if (word.length<1) return;
            let self = this;
            const filter = `?filter={"where":{"or":[{"nama":{"like":"${word}"}},{ "username":{"like":"${word}"}}]}}`;
            axios.get(API_BASE + 'Siswas'+filter, {
                headers: {'Authorization': /*webStorage.getItem('token')*/""}
            }).then(function (response) {
                self.setState({
                    allSiswa: response.data
                });
            }).catch(function (error) {
                console.error(error);
            });
            this.setState({
                onSearch: true
            });
        }

        if (this.state.onSearch && (e.target.value === '' || e.target.value === ' ')){
            this.loadAllSiswa();
        }
    }

    render() {
        const {kelas, siswaKelas, allSiswa, userDetail, onSearch} = this.state;

        let dataSiswaKelas = siswaKelas.map((siswa,index) => {
           return(
               <div className="col-xs-12" key={index}>
                   <div className="panel panel-flat">
                       <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                           <h6 className="panel-title">{siswa.nama}</h6>
                           <div className="heading-elements">
                               <ul className="icons-list">
                                   <li style={{color: "blue"}}>
                                       <a onClick={()=>{this.showModalDetail(siswa)}}>
                                           <i className="icon-profile" data-toggle="modal" data-target="#modal_detail"/>
                                       </a>
                                   </li>
                                   <li style={{color: "red"}}>
                                       <a onClick={()=>{this.removeSiswa(siswa)}}>
                                           <i className="icon-cross2"/>
                                       </a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                       <div className="panel-body">
                           <div className="row">
                               <div className="col-lg-3">
                                   <img src={`${siswa.image}.png`} className="img-circle" style={{height: 50, width:50}}/>
                               </div>
                               <div className="col-lg-9" style={{overflow: "hidden"}}>
                                   <div>{siswa.username}</div>
                                   <div>{siswa.email}</div>
                                   <div>{siswa.tanggal_lahir}</div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           );
        });
        let dataAllSiswa = allSiswa.map((siswa,index) => {
            return(
                <div className="col-xs-6" key={index}>
                    <div className="panel panel-flat">
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{siswa.nama}</h6>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li style={{color: "blue"}}>
                                        <a onClick={()=>{this.showModalDetail(siswa)}}>
                                            <i className="icon-profile" data-toggle="modal" data-target="#modal_detail"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body cursor-pointer" onClick={()=>{this.addSiswa(siswa)}}>
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={`${siswa.image}.png`} className="img-circle" style={{height: 50, width:50}}/>
                                    {this.checkSiswaInClass(siswa) ?
                                        <div style={{marginTop:-49}}>
                                            <i className="icon-checkmark4 img-circle" style={{fontSize:50, backgroundColor:'rgba(29, 165, 50, 0.5)', color:'red'}}/>
                                        </div> :
                                        null
                                    }

                                </div>
                                <div className="col-lg-9" style={{overflow: "hidden"}}>
                                    <div>{siswa.username}</div>
                                    <div>{siswa.email}</div>
                                    <div>{siswa.tanggal_lahir}</div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div className="content-wrapper col-xs-12">
                <PageHeader icon="icon-users4 position-left" text1={`Daftar Siswa ${kelas.desc}`}/>
                <div className="col-xs-4">
                    <div className="panel panel-flat bg-teal-800" style={{marginBottom:0}}>
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{siswaKelas.length} Siswa Dalam Kelas</h6>
                        </div>
                   </div>
                    <div className="bg-slate-300" style={{overflowX: 'hidden', overflowY: 'scroll', height: 450, paddingTop:20}}>
                        {dataSiswaKelas}
                    </div>

                </div>
                <div className="col-xs-8">
                    <div className="panel panel-flat bg-success-800 position-relative" style={{marginBottom:0, height:45}}>
                        <div className="panel-heading pull-left" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">Semua Siswa</h6>
                        </div>
                        <div className="form-group pull-right" style={{marginBottom:0, marginTop:3, marginRight:5}}>
                            <div className="input-group">
                                <input type="text" className="form-control bg-success-600" placeholder="Nama / Username"
                                       ref={(cari) => {this.cari = cari}} onKeyDown={::this.search}/>

                                {!onSearch ?
                                    <span className="input-group-addon bg-success-700"  onClick={()=>{this.search({key:'Enter'})}}
                                          style={{cursor:'pointer'}}>
                                            <i className="icon-search4 "/>
                                        </span>:
                                    <span className="input-group-addon bg-success-700" onClick={()=>{this.loadAllSiswa()}}
                                          style={{cursor:'pointer'}}>
                                                <i className="icon-cross2"/>
                                        </span>
                                }
                            </div>
                        </div>

                    </div>
                    <div className="col-xs-12" style={{overflowX: 'hidden', overflowY: 'scroll', height: 450, paddingTop:20}}>
                        {dataAllSiswa}
                    </div>

                </div>

                <div id="modal_detail" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h5 className="modal-title"><i className="icon-profile"/> &nbsp;{userDetail.nama}</h5>
                            </div>

                            <div className="modal-body">
                                <div style={{textAlign:'center'}}>
                                    <img src={`${userDetail.image}.png`} className="img-circle" style={{height: 150, width:150}}/>
                                </div>

                                <form className="form-horizontal" action="#" style={{fontSize:16}}>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Name</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.nama}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Username</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.username}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Email</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.email}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">No. Telp</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.no}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Alamat</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.alamat}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Tanggal Lahir</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.tanggal_lahir}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Tempat Lahir</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.tempat_lahir}</div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{marginBottom: 0}}>
                                        <label className="col-lg-3 control-label">Deskripsi</label>
                                        <div className="col-lg-9">
                                            <div className="form-control-static">: {userDetail.desc}</div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-link" data-dismiss="modal"><i className="icon-cross"/> Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}