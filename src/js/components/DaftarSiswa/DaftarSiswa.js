/**
 * Created by Hinata on 3/2/2017.
 */
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PageHeader from '../PageHeader';
import axios from 'axios';
import { API_BASE, webStorage } from '../../utils';
import PageHeaderButton from '../PageHeader/PageHeaderButton';


export default class DaftarSiswa extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSiswa: []
        }
    }

    componentWillMount() {
        // const { params } = this.props;
        this.loadData();
    }

    loadData() {
        let self = this;
        axios.get(API_BASE + 'Siswas/', {
            headers: {'Authorization': /*webStorage.getItem('token')*/""}
        }).then(function (response) {
            self.setState({
                dataSiswa: response.data
            });
        }).catch(function (error) {
            console.error(error);
        })
    }

    render() {

        let self = this;

        const {dataSiswa} = this.state;
        let datas = dataSiswa.map((siswa, index)=>{
            return(
                <div className="col-lg-4 col-sm-6">
                    <div className="panel panel-flat">
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{siswa.nama}</h6>
                            <div className="heading-elements">
                                <ul className="icons-list">
                                    <li style={{color: "blue"}}><a><i className="icon-profile"/></a></li>
                                    <li style={{color: "green"}}><a><i className="icon-pencil5"/></a></li>
                                    <li style={{color: "red"}}><a><i className="icon-trash"/></a></li>
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
                                    <div>{siswa.id}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        // if (dataSiswa != null)datas = dataSiswa;

        return (
            <div>
                <PageHeader>
                  <PageHeaderButton link="#/app/siswa/tambah" icon="icon-plus-circle2" iconColor="text-primary" text="Tambah Siswa"/>
                </PageHeader>

                <div className="content">
                    <div className="row">
                        {/*<div className="col-lg-12">
                            <BootstrapTable data={datas} striped hover >
                                <TableHeaderColumn isKey dataField='nama'>Nama</TableHeaderColumn>
                                <TableHeaderColumn dataField='alamat'>Alamat</TableHeaderColumn>
                                <TableHeaderColumn dataField='tanggal_lahir'>Tanggal Lahir</TableHeaderColumn>
                                <TableHeaderColumn dataField='tempat_lahir'>Tempat Lahir</TableHeaderColumn>
                                <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                                <TableHeaderColumn dataField='desc'>Description</TableHeaderColumn>
                            </BootstrapTable>
                        </div>*/}
                        {datas}

                    </div>
                </div>
            </div>
        );
    }
}
