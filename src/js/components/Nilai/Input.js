/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import { connect } from "react-redux";
import axios from 'axios';
import { API_BASE, getAccount, CustomMoment } from '../../utils';
import TextEdit from './TextEdit';

export default class Input extends React.Component {
    state = {
        kelasId: "",
        tugasId: "",
        dataSiswa: [],
        dataKelas: null,
        dataTugas: null,
        isLoading: false,
        isFirst: true,
    }
    componentWillMount() {
        let tugasId = this.props.params.tugasId;
        let kelasId = this.props.params.kelasId;
        this.setState({
            kelasId: kelasId,
            tugasId: tugasId
        });
        this.loadSiswa();
        this.loadKelas(kelasId);
        this.loadTugas(tugasId);
    }

    loadKelas(id){
        let self = this;
        axios.get(API_BASE+"Kelas/"+id).then(function (response) {
            self.setState({
                dataKelas: response.data
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    loadTugas(id){
        let self = this;
        axios.get(API_BASE+"Tugas/"+id+"/tugas").then(function (response) {
            self.setState({
                dataTugas: response.data
            });
        }).catch(function (error) {
            console.error(error);
        });
    }

    loadSiswa(){
        let self = this;
        axios.get(API_BASE+"Kelas/"+this.props.params.kelasId+"/siswa").then(function (response) {
            self.setState({
                dataSiswa: response.data
            });
        }).catch(function (error) {
            console.error(error);
        });
    }



    render() {
        let {dataSiswa, dataKelas, dataTugas, dataNilai, tugasId} = this.state;

        let siswa = dataSiswa.map(({nama, image, id}, i)=>{
            return(
                <tr key={id}>
                    <td>{i+1}</td>
                    <td>
                        <div className="media-left media-middle">
                            <a href="#"><img src={image+".png"} className="img-circle img-xs" alt="" /></a>
                        </div>
                        <div className="media-left">
                            <div className=""><a className="text-default text-semibold">{nama}</a></div>
                        </div>
                    </td>
                    <td style={{width:300, cursor:"pointer"}}><TextEdit tugasId={tugasId} siswaId={id}/></td>
                </tr>
            );
        });

        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-bell2" text1={dataTugas ? "Nilai "+dataTugas.nama : "Nilai"} text2={dataTugas ?
                    dataTugas.mapel.nama : null}/>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-flat">
                                <div className="panel-heading" style={{borderBottom: "1px #ddd solid"}}>
                                    <h6 className="panel-title">{dataKelas ? "Kelas "+dataKelas.desc : "Kelas"}</h6>
                                </div>
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Nama</th>
                                                <th>Nilai</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {siswa}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}