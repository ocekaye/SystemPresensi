/**
 * Created by Hinata on 6/7/2017.
 */
import React from 'react';
import Datetime from 'react-datetime';
import { connect } from "react-redux";
import axios from 'axios';
import { withRouter } from 'react-router';

import PageHeader from '../PageHeader';
import {getMapel} from '../../actions/mapelAction';
import {CustomMoment, API_BASE, getAccount} from '../../utils';

@withRouter
@connect((state) => state)
export default class CreateTugas extends React.Component {
    state = {
        mapels:[],
        namaTugas: null,
        mulai: null,
        selesai: null,
        mapelId: null,
        saving: false,
    }
    componentWillMount(){
        Datetime.moment.updateLocale('en', {
            months : [
                "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
                "Augustus", "September", "Oktober", "November", "Desember"
            ],
            weekdays : [
                "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
            ]
        });
        this.props.dispatch(getMapel());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mapels: nextProps.mapel.mapels});
    }

    handleValue(e){
        switch (e.target.name){
            case 'nama':
                this.setState({namaTugas: e.target.value});
                break;
            case 'mapel':
                this.setState({mapelId: e.target.value});
                break;
        }
    }

    handleMulai(tanggal){
        this.setState({mulai: tanggal.format()});
    }

    handleSelesai(tanggal){
        this.setState({selesai: tanggal.format()});
    }

    save(){
        const {namaTugas, mulai, selesai, mapelId, saving} = this.state;
        const isValid = (namaTugas && mulai && selesai && mapelId);
        const toGo = this.props.router;
        if (isValid){
            this.setState({saving: true});
            let data = {
                "nama": namaTugas,
                "mulai": mulai,
                "selesai": selesai,
                "guruId": getAccount().id,
                "mapelId": mapelId
            };
            axios.post(API_BASE+"Tugas", data).then(function (response) {
                toGo.replace('app/tugas/all');
            })
        }

    }

    render() {
        const {mapels, namaTugas, mulai, selesai, mapelId, saving} = this.state;
        const isValid = (namaTugas && mulai && selesai && mapelId);
        const saveStyle = saving ? "icon-spinner2 spinner" : "icon-folder-check";
        let listMapel = mapels.map(({id, nama}) => {
            return (
                <option value={id}>{nama}</option>
            );
        });
        listMapel.unshift(<option value=''>Pilih Mapel</option>);
        return (
            <div style={{margin:0}}>
                <PageHeader icon="icon-pencil5 position-left" text1="Create Tugas"/>
                <div className="content">
                    <div className="panel panel-flat">
                        <div className="row">
                              <div className="panel-body">
                                <form className="form-horizontal" action="#">
                                <div className="content-group">
                                    <legend className="text-bold">New Tugas</legend>
                                    <div className="form-group">
                                        <label className="control-label col-lg-2" >Nama Tugas</label>
                                        <div className="col-lg-10">
                                            <input type="text" name="nama" onChange={::this.handleValue} className="form-control" placeholder="Nama Tugas"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-5">
                                            <div className="form-group">
                                                <label className="control-label">Mulai</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="icon-calendar22"/></span>
                                                    <Datetime dateFormat={"dddd, DD-MMMM-YYYY"} onChange={::this.handleMulai} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="form-group">
                                                <label className="control-label">Selesai</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="icon-calendar22"/></span>
                                                    <Datetime dateFormat={"dddd, DD-MMMM-YYYY"} onChange={::this.handleSelesai}/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group" >
                                        <label className="control-label col-lg-2" >Mapel</label>
                                        <div className="col-lg-5">
                                            <select name="mapel" onChange={::this.handleValue} className="form-control">
                                                {listMapel}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                </form>
                                <div className="col-lg-12" style={{borderTop: '1px solid #e5e5e5', paddingTop:15}}>
                                    <div style={{float:'right'}}>
                                        <button type="button" className="btn bg-teal-400 btn-labeled btn-rounded"
                                            style={isValid ? {} : {backgroundColor:"rgba(141, 141, 142, 0.3)"}}
                                            onClick={::this.save}>
                                            <b><i className={saveStyle}/></b>
                                            {saving ? "Saving": "Save"}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
