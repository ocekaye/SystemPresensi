/**
 * Created by Hinata on 5/11/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import PageHeaderButton from '../PageHeader/PageHeaderButton';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {getAllTugas, getAllTugasByKelas} from '../../actions/guruAction';
import {CustomMoment } from '../../utils';

@withRouter
@connect((state) => state)
export default class Jadwal extends React.Component {
    state = {
        tugas: [],
        fetched: false,
    }
    componentWillMount() {
        console.log(this.props);
        if(this.props.params.id){
            this.props.dispatch(getAllTugasByKelas(this.props.params.id));
        } else this.props.dispatch(getAllTugas());
    }

    componentWillReceiveProps(nextProps) {
        console.log('next prop tugas', nextProps);
        this.setState({
            tugas: nextProps.tugas.tugas,
            fetched: true
        });
        if (this.props.params.id == null && nextProps.params.id == null && !this.state.fetched){
            this.props.dispatch(getAllTugas());
        } else if (this.props.params.id != nextProps.params.id){
            if(nextProps.params.id){
                this.props.dispatch(getAllTugasByKelas(nextProps.params.id));
            } else this.props.dispatch(getAllTugas());
        }
    }

    addNew(){
        this.props.router.replace('tugas/create');
    }

    render() {
        let jadwal = this.state.tugas.map(({nama, mulai, selesai, kelas, mapel}, i) => {
            let mMulai = CustomMoment(mulai).format("dddd, DD-MMMM-YYYY, hh:mm:ss");
            let mSelesai = CustomMoment(selesai).format("dddd, DD-MMMM-YYYY, hh:mm:ss");
            return (<tr>
                <td>{nama}</td>
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
                <td style={{maxWidth:300}}>
                    <div className="row">
                        {kelas.map(({desc, index}) => {
                            return (
                                <div className="col-lg-3">
                                <button key={index} type="button" className="btn border-slate text-slate-800 btn-flat"
                                        style={{marginRight:1, cursor:'default'}}>
                                    {desc}
                                </button>
                                </div>
                            );
                        })}
                    </div>
                </td>
                <td>{mapel.nama}</td>
            </tr>);
        });
        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-home4 position-left" text1="Tugas">
                    <PageHeaderButton link="#/app/tugas/create" icon="icon-plus-circle2" iconColor="text-primary"
                                      text="New Tugas"/>
                </PageHeader>
                <div className="content">
                    <div className="panel panel-flat">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th className="col-md-4">Nama Tugas</th>
                                            <th className="col-md-4">
                                                <span className="status-mark border-blue position-left"
                                                      style={{marginRight:"1px"}}/>
                                                Mulai
                                                {'  '}
                                                <span className="status-mark border-warning position-left"
                                                      style={{marginRight:"1px", marginLeft: "5px"}}/>
                                                Selesai
                                            </th>
                                            <th className="col-md-4">Kelas</th>
                                            <th className="col-md-4">Mapel</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {jadwal}
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