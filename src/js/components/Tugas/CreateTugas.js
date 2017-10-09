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
        dataKelas:[],
        selectedKelas:[]
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
        this.getDataKelas();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mapels: nextProps.mapel.mapels});
    }

    getDataKelas(){
        let self = this;
        axios.get(`${API_BASE}Kelas`).then(function (response) {
            self.setState({
                dataKelas: response.data
            });
        });
    }

    checkKelasInTugas(kelas){
        return this.getIndexOfKelas(kelas) >= 0
    }

    getIndexOfKelas(kelas){
        for (var i = 0; i < this.state.selectedKelas.length; i++){
            if (this.state.selectedKelas[i].id === kelas.id){
                return i;
            }
        }
        return -1;
    }

    selectKelas(kelas){
        let {selectedKelas} = this.state;
        if (this.checkKelasInTugas(kelas)){
            this.removeKelas(kelas);
            return;
        }
        selectedKelas.push(kelas);
        this.setState({
            selectedKelas
        });
    }

    removeKelas(kelas){
        let {selectedKelas} = this.state;
        selectedKelas.splice(this.getIndexOfKelas(kelas), 1);
        this.setState({
            selectedKelas
        });
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
            let self = this;
            axios.post(API_BASE+"Tugas", data).then(function (response) {
                self.tugasKelasRelation(response.data.id);
            })
        }
    }

    tugasKelasRelation(tugasId){
        const toGo = this.props.router;
        const {selectedKelas} = this.state;
        selectedKelas.map((kelas, i)=>{
            axios.put(`${API_BASE}Kelas/${kelas.id}/tugas/rel/${tugasId}`).then(function (response) {
                if(i >= selectedKelas.length-1) toGo.replace('app/tugas/all');
            }).catch(function (error) {
                if(i >= selectedKelas.length) toGo.replace('app/tugas/all');
            })
        });

    }

    render() {
        const {mapels, namaTugas, mulai, selesai, mapelId, saving, dataKelas, selectedKelas} = this.state;
        const isValid = (namaTugas && mulai && selesai && mapelId);
        const saveStyle = saving ? "icon-spinner2 spinner" : "icon-folder-check";
        let listMapel = mapels.map(({id, nama}) => {
            return (
                <option value={id}>{nama}</option>
            );
        });
        listMapel.unshift(<option value=''>Pilih Mapel</option>);

        let kelasList = dataKelas.map((kelas, index)=>{
            const bg = ['blue', 'red', 'green', 'aqua', 'coral'];
            let bgW = index;
            if (index > bg.length - 1){
                bgW = index%bg.length;
            }
            const iconStyle = {
                height: 50,
                width:50,
                paddingTop: 10,
                fontSize: 30,
                color: 'white',
                backgroundColor: bg[bgW],
            };
            return(
                <div className="col-lg-6 col-sm-6" key={index} onClick={()=> {this.selectKelas(kelas)}}>
                    <div className="panel panel-flat">
                        <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                            <h6 className="panel-title">{kelas.desc}</h6>
                        </div>
                        <div className="panel-body cursor-pointer" >
                            <div className="row">
                                <div className="col-xs-3" style={{fontSize:24}}>
                                    <i className="icon-users4 img-circle" style={iconStyle}/>
                                    {this.checkKelasInTugas(kelas) ?
                                        <div style={{marginTop:-49}}>
                                            <i className="icon-checkmark4 img-circle" style={{fontSize:50, backgroundColor:'rgba(29, 165, 50, 0.5)', color:'red'}}/>
                                        </div> :
                                        null
                                    }
                                </div>
                                <div className="col-xs-9" style={{overflow: "hidden"}}>
                                    <div>{kelas.nama}</div>
                                    <div>{kelas.desc}</div>
                                    <div>{kelas.tag}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        let selectedKelasList = selectedKelas.map((kelas, index) =>{
            return(
                <button key={index} type="button" className="btn border-slate text-slate-800 btn-flat" style={{marginRight:1, cursor:'default'}}>
                    {kelas.desc}
                    <i style={{color: 'red', cursor:'pointer'}} className="icon-cross" onClick={()=>{this.selectKelas(kelas)}}/>
                </button>
            );
        });

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
                                    <div className="form-group" >
                                        <label className="control-label col-lg-12" >
                                            Kelas
                                            <button type="button" className="btn border-warning text-warning-600 btn-flat btn-icon btn-rounded" data-toggle="modal" data-target="#modal_siswa"><i className="icon-plus3"/></button>
                                        </label>

                                        <div className="col-lg-12">
                                            <div className="btn-group">
                                                {selectedKelasList}
                                            </div>
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
                <div id="modal_siswa" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="row">
                                            {kelasList}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-link" data-dismiss="modal"><i className="icon-cross"/> Cancel</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
