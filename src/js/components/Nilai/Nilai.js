/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import axios from 'axios';
import { API_BASE, getAccount, CustomMoment } from '../../utils';

@withRouter
export default class Nilai extends React.Component {
    state = {
        dataKelas: [],
        kelasSelect: null,
        dataTugas: [],
        isLoading: false,
        isFirst: true,
    }
    componentWillMount() {
        this.loadKelas();
    }

    loadKelas(){
        let self = this;
        axios.get(API_BASE+"Kelas/").then(function (response) {

            self.setState({
                dataKelas: response.data
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    loadTugasByKelas(id){
        let self = this;
        axios.get(API_BASE+"Kelas/"+id+"/"+getAccount().id+"/tugas/").then(function (response) {
          console.log(response);
            self.setState({
                dataTugas: response.data,
                isLoading: false,
                isFirst: false,
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    onKelasClick(id){
        this.setState({
            kelasSelect: id,
            dataTugas: [],
            isLoading: true
        });
        this.loadTugasByKelas(id);
    }

    onTugasClick(id){
        console.log(id);
        this.props.router.replace('/app/nilai/input/'+this.state.kelasSelect+"/"+id);
    }

    render() {
        let { dataKelas, kelasSelect, dataTugas, isLoading, isFirst } = this.state;
        let tugas = <div>Pilih Kelas</div>;
        let kelas = dataKelas.map(({nama, desc, id}, i)=>{
            return(
                <tr key={id} onClick={(e) => this.onKelasClick(id)}
                    className={kelasSelect == id ? "nilai-kelas-select": "nilai-kelas"}>
                    <td>
                        <div className="media-left">
                            <div className=""><a className="text-default text-semibold">{desc}</a></div>
                            <div className="text-muted text-size-small">
                                <span className="status-mark border-blue position-left"/>
                                {nama}
                            </div>
                        </div>
                    </td>
                </tr>
            );
        });
        if (isFirst){
            tugas =  <tr>
                <td colSpan="4">
                    <div style={{width:"100%", textAlign: "center"}}> Pilih Kelas</div>
                </td>
            </tr>
        } else if (isLoading){
            tugas =  <tr>
                        <td colSpan="4">
                            <div className="icon-spinner2 spinner" style={{width:"100%"}}></div>
                        </td>
                    </tr>
        } else if(dataTugas.length < 1){
            tugas =  <tr>
                <td colSpan="4">
                    <div style={{width:"100%", textAlign: "center"}}>Tidak ada data.</div>
                </td>
            </tr>
        } else{
            tugas = dataTugas.map(({nama, mulai, selesai, kelas, mapel, id})=> {
                let mMulai = CustomMoment(mulai).format("dddd, DD-MMMM-YYYY, hh:mm:ss");
                let mSelesai = CustomMoment(selesai).format("dddd, DD-MMMM-YYYY, hh:mm:ss");
                return(
                    <tr key={id} className="table-hover" onClick={(e)=> this.onTugasClick(id)}>
                        <td>
                            <div className="media-left">
                                <div className=""><a href="#" className="text-default text-semibold">{nama}</a></div>
                                <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left"/>
                                    {kelas[0].desc}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="media-left media-middle">
                                <i className="icon-calendar52 position-left"/>
                            </div>
                            <div className="media-left">
                                <div className="text-default text-semibold">
                                    <span className="status-mark border-blue position-left"/>
                                    {mMulai}
                                </div>
                                <div className="text-default text-semibold">
                                    <span className="status-mark border-warning position-left"/>
                                    {mSelesai}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="media-left">
                                <div className=""><a href="#" className="text-default text-semibold">
                                    {mapel.nama}</a></div>
                                <div className="text-muted text-size-small">
                                    <span className="status-mark border-blue position-left"/>
                                    {mapel.desc}
                                </div>
                            </div>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-bell2" text1="Nilai" text2={this.props.params.parm}/>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="panel panel-flat">
                                <div className="panel-heading" style={{borderBottom: "1px #ddd solid"}}>
                                    <h6 className="panel-title">Kelas</h6>
                                </div>
                                <div style={{maxHeight:350, overflow: "scroll", overflowX:"hidden"}}>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <tbody>
                                                {kelas}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="panel panel-flat">
                                <div className="panel-heading" style={{borderBottom: "1px #ddd solid"}}>
                                    <h6 className="panel-title">Tugas</h6>
                                </div>
                                <div style={{maxHeight:350, overflow: "scroll", overflowX:"hidden"}}>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>Nama</th>
                                                <th>
                                                    <span className="status-mark border-blue position-left"
                                                        style={{marginRight:"1px"}}/>
                                                    Mulai
                                                    {'  '}
                                                    <span className="status-mark border-warning position-left"
                                                          style={{marginRight:"1px", marginLeft: "5px"}}/>
                                                    Selesai
                                                </th>
                                                <th>Mapel</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {tugas}
                                            </tbody>
                                        </table>
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
