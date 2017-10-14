/**
 * Created by Hinata on 9/10/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import axios from 'axios';
import {API_BASE} from '../../utils';
import { withRouter } from 'react-router';

@withRouter
export default class DetailKelas extends React.Component {
    state = {
        kelas: {},
        siswa: [],
        userDetail: {}
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
        this.loadSiswa();
    }

    loadSiswa(){
        let self = this;
        axios.get(API_BASE + 'Kelas/'+this.props.params.id+'/siswa')
            .then(function (response) {
                self.setState({
                    siswa:response.data
                });
            }).catch(function (error) {
        });
    }

    showModalDetail(user){
        this.setState({userDetail: user});
    }

    gotoSiswaKelas(){
        this.props.router.push('app/kelas/detail/'+this.state.kelas.id+'/siswa');
    }

    getIndexOfSiswa(siswa){
        for (var i = 0; i < this.state.siswa.length; i++){
            if (this.state.siswa[i].id === siswa.id){
                return i;
            }
        }
        return -1;
    }

    removeSiswa(siswas){
        axios.delete(API_BASE + 'Kelas/'+this.state.kelas.id+'/siswa/rel/'+siswas.id)
            .then(function (response) {
            }).catch(function (error) {
        });
        let {siswa}  =this.state;
        siswa.splice(this.getIndexOfSiswa(siswas), 1);
        this.setState({
            siswa
        })
    }

    render() {
        const {kelas, siswa, userDetail} = this.state;
        const bg = ['blue', 'red', 'green', 'aqua', 'coral'];

        let bgV = Math.floor((Math.random() * bg.length - 1));
        const initialName = userDetail.nama != null ? userDetail.nama.slice(0,2).toUpperCase() : '';

        const iconStyle = {
            height: 50,
            width:50,
            paddingTop: 10,
            fontSize: 30,
            color: 'white',
            backgroundColor: bg[Math.floor(Math.random() * bg.length)],
        };

        let datas = siswa.map((data, index)=>{
            let bgW = index;
            if (index > bg.length - 1){
                bgW = index%bg.length;
            }
            const initial = data.nama.slice(0,2).toUpperCase();
            return(
                <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="panel panel-flat">
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{data.nama}</h6>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li style={{color: "blue"}}>
                                        <a>
                                            <i className="icon-profile" data-toggle="modal" data-target="#modal_detail"
                                               onClick={()=>{this.showModalDetail(data)}}/>
                                        </a>
                                    </li>
                                    <li style={{color: "red"}}>
                                        <a>
                                            <i className="icon-trash" data-toggle="modal" data-target="#modal_hapus"
                                                onClick={()=>{this.removeSiswa(data)}}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="img-circle" style={{height: 50,
                                        width:50,
                                        backgroundColor:bg[bgW],
                                        textAlign: 'center',
                                        margin: 'auto',
                                        fontSize:30, paddingTop:3, color:'white'}}>
                                        <div>{initial}</div>
                                    </div>
                                </div>
                                <div className="col-lg-9" style={{overflow: "hidden"}}>
                                    <div>{data.username}</div>
                                    <div>{data.email}</div>
                                    <div>{data.tanggal_lahir}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-users4 position-left" text1={`Detail Kelas ${kelas.desc}`}/>
                <div style={{paddingLeft: '50%'}}>
                    <div className="panel panel-flat" style={{width: 350, marginLeft: -175}}>
                        <div className="panel-body" style={{display: 'inline-flex'}}>
                                <div style={{fontSize:24, paddingTop:18}}>
                                    <i className="icon-users4 img-circle" style={iconStyle}/>
                                </div>
                                <div style={{overflow: "hidden", marginLeft: 10, fontSize:16}}>
                                        <div  style={{marginBottom: 0, display: 'inline-flex'}}>
                                            <label style={{width: 100}}>Name</label>
                                            <div style={{width: 180}}>: {kelas.nama}</div>
                                        </div>
                                        <div  style={{marginBottom: 0, display: 'inline-flex'}}>
                                            <label style={{width: 100}}>Deskripsi</label>
                                            <div style={{width: 180}}>: {kelas.desc}</div>
                                        </div>
                                        <div  style={{marginBottom: 0, display: 'inline-flex'}}>
                                            <label style={{width: 100}}>Tag</label>
                                            <div style={{width: 180}}>: {kelas.tag}</div>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="page-header page-header-default">
                    <div className="breadcrumb-line">
                        <ul className="breadcrumb">
                            <li><span style={{marginRight:10}}><i className="icon-users4 img-circle" style={iconStyle}/></span>Daftar Siswa Kelas {kelas.desc}</li>
                        </ul>

                        <ul className="breadcrumb-elements">
                            <li>
                                <a  className="dropdown-toggle" data-toggle="dropdown" style={{marginTop:16}}
                                    onClick={::this.gotoSiswaKelas}>
                                    <i className="icon-repo-forked position-left"/>Tambah Siswa
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
               {/* <div style={{fontSize:24, marginBottom: 20}}>
                    <span style={{marginRight:10}}><i className="icon-users4 img-circle" style={iconStyle}/></span>Daftar Siswa Kelas {kelas.desc}
                    <div>
                        <span style={{marginRight:10}}><i className="icon-users4 img-circle" style={iconStyle}/></span>Daftar Siswa Kelas {kelas.desc}
                    </div>

                </div>*/}
                {datas}

                <div id="modal_detail" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h5 className="modal-title"><i className="icon-profile"/> &nbsp;{userDetail.nama}</h5>
                            </div>

                            <div className="modal-body">
                                <div style={{textAlign:'center'}}>
                                    <div className="img-circle" style={{height: 50,
                                        width:50,
                                        backgroundColor:bg[bgV],
                                        textAlign: 'center',
                                        margin: 'auto',
                                        fontSize:30, paddingTop:3, color:'white'}}>
                                        <div>{initialName}</div>
                                    </div>
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