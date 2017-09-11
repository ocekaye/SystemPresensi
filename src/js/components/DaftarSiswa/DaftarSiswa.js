/**
 * Created by Hinata on 3/2/2017.
 */
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PageHeader from '../PageHeader';
import axios from 'axios';
import { API_BASE, webStorage } from '../../utils';
import PageHeaderButton from '../PageHeader/PageHeaderButton';
import Paginate from '../Paginate';
import EditSiswa from './EditSiswa';

export default class DaftarSiswa extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSiswa: [],
            totalPage: 5,
            page: 1,
            showPerPage: 5,
            itemPerPage: 12,
            count: 0,
            onSearch: false,
            modalEdit: false,
            userDetail: {}
        }
    }

    componentWillMount() {
        // const { params } = this.props;
        this.getTotalSiswa();
        this.loadData(this.state.page);
    }

    getTotalSiswa(){
        const {itemPerPage} = this.state;
        let self = this;
        axios.get(API_BASE + 'Siswas/count', {
            headers: {'Authorization': /*webStorage.getItem('token')*/""}
        }).then(function (response) {
            const count = Math.ceil(response.data.count/itemPerPage);
            self.setState({
                totalPage: count,
                count: response.data.count
            });
        }).catch(function (error) {
            console.error(error);
        })
    }

    showModalEdit(user){
        this.setState({userDetail: user});
    }

    showModalDetail(user){
        this.setState({userDetail: user});
    }

    forceDelete(){
       let sefl = this;
        axios.delete(API_BASE + 'Siswas/'+this.state.userDetail.id).then(function (response) {
            $('#modal_hapus').modal('hide');
            sefl.loadData(sefl.state.page);
            sefl.getTotalSiswa();
        }).catch(function (error) {
            console.error(error);
            $('#modal_hapus').modal('hide');
        });
    }

    loadData(page, itemPP) {
        const {totalPage, showPerPage, itemPerPage} = this.state;
        let self = this;
        // const filter = `?filter=%7B"offset"%3A${(page-1)*itemPerPage}%2C%20"limit"%3A${itemPerPage}%7D`;
        const filter = `?filter={"offset":${(page-1)*itemPerPage},"limit":${itemPP ? itemPP : itemPerPage}}`;
        axios.get(API_BASE + 'Siswas'+filter, {
            headers: {'Authorization': /*webStorage.getItem('token')*/""}
        }).then(function (response) {
            self.setState({
                dataSiswa: response.data
            });
        }).catch(function (error) {
            console.error(error);
        });
        this.setState({
            onSearch: false
        });
        if (this.cari != null){
            this.cari.value = '';
        }

    }

    handlePageChane(page){
        this.setState({
            page: page
        });
        this.loadData(page);
    }

    changeItemPerPage(item){
        const {count} = this.state;
        const newCount = Math.ceil(count/item);
        this.loadData(1, item);
        this.setState({
            itemPerPage: item,
            totalPage: newCount,
            page: 1
        });
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
                    dataSiswa: response.data
                });
            }).catch(function (error) {
                console.error(error);
            });
            this.setState({
                onSearch: true
            });
        }

        if (this.state.onSearch && (e.target.value === '' || e.target.value === ' ')){
            this.loadData(this.state.page);
        }
    }

    onEditSuccess(){
        this.loadData(this.state.page);
        $('#modal_edit').modal('hide');
    }

    render() {

        let self = this;

        const {dataSiswa, totalPage, page, showPerPage, itemPerPage, onSearch, userDetail} = this.state;
        let datas = dataSiswa.map((siswa, index)=>{
            return(
                <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="panel panel-flat">
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{siswa.nama}</h6>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li style={{color: "blue"}}>
                                        <a>
                                            <i className="icon-profile" data-toggle="modal" data-target="#modal_detail"
                                            onClick={()=>{this.showModalDetail(siswa)}}/>
                                        </a>
                                    </li>
                                    <li style={{color: "green"}}>
                                        <a>
                                            <i className="icon-pencil5" data-toggle="modal" data-target="#modal_edit"
                                            onClick={()=> {this.showModalEdit(siswa)}}/>
                                        </a>
                                    </li>
                                    <li style={{color: "red"}}>
                                        <a>
                                            <i className="icon-trash" data-toggle="modal" data-target="#modal_hapus"
                                               onClick={()=>{this.showModalDetail(siswa)}}/>
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

        const breadcrumbElements = [];
        breadcrumbElements.push(<li className="dropdown">
            <a  className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon-gear position-left"/>
                {itemPerPage} Item/Page
                <span className="caret"/>
            </a>

            <ul className="dropdown-menu dropdown-menu-right">
                <li><a onClick={()=>{this.changeItemPerPage(6)}}><i className="icon-stack-empty"/> 6 Item/Page</a></li>
                <li><a onClick={()=>{this.changeItemPerPage(12)}}><i className="icon-stack-empty"/> 12 Item/Page</a></li>
                <li><a onClick={()=>{this.changeItemPerPage(18)}}><i className="icon-stack-empty"/> 18 Item/Page</a></li>
                <li><a onClick={()=>{this.changeItemPerPage(24)}}><i className="icon-stack-empty"/> 24 Item/Page</a></li>
                <li><a onClick={()=>{this.changeItemPerPage(30)}}><i className="icon-stack-empty"/> 30 Item/Page</a></li>
            </ul>
        </li>);
        // if (dataSiswa != null)datas = dataSiswa;

        return (
            <div>
                <PageHeader icon=" icon-users position-left" text1="Daftar Siswa" breadcrumbElements={breadcrumbElements}>
                    <div style={{display: 'inline-flex'}}>
                        <PageHeaderButton link="#/app/siswa/tambah" icon="icon-plus-circle2" iconColor="text-primary" text="Tambah Siswa"/>
                        <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nama / Username" onKeyDown={::this.search}
                                           ref={(cari) => {this.cari = cari}}/>
                                    {!onSearch ?
                                        <span className="input-group-addon"  onClick={()=>{this.search({key:'Enter'})}}
                                              style={{cursor:'pointer'}}>
                                            <i className="icon-search4 "/>
                                        </span>:
                                        <span className="input-group-addon" onClick={()=>{this.loadData(page)}}
                                              style={{cursor:'pointer'}}>
                                                <i className="icon-cross2"/>
                                        </span>
                                    }
                                </div>
                        </div>
                    </div>

                </PageHeader>

                <div className="content">
                    <div className="row">
                        {datas}
                    </div>
                    {onSearch ? null :
                        <div style={{textAlign: 'center'}}>
                            <Paginate totalPage={totalPage} page={page} showPerPage={showPerPage} onPageChange={::this.handlePageChane}/>
                        </div>
                    }
                </div>

                <div id="modal_edit" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h5 className="modal-title"><i className="icon-pencil5"/> &nbsp;Edit {userDetail.nama}</h5>
                            </div>
t
                            <div className="modal-body">
                               <EditSiswa siswa={userDetail} onEditSuccess={::this.onEditSuccess}/>
                            </div>

                            <div className="modal-footer">

                            </div>
                        </div>
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

                <div id="modal_hapus" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h5 className="modal-title"><i className="icon-trash"/> &nbsp;Delete {userDetail.nama}</h5>
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
                                </form>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-link" data-dismiss="modal"><i className="icon-cross"/> Cancel</button>
                                <button className="btn btn-danger" onClick={::this.forceDelete}><i className="icon-trash"/> Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
