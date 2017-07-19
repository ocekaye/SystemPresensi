/**
 * Created by Hinata on 5/11/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import { connect } from "react-redux";
import {getJadwal} from '../../actions/guruAction';

@connect((state) => state)
export default class Jadwal extends React.Component {
    state = {
        jadwal: []
    }
    componentWillMount() {
        this.props.dispatch(getJadwal());
    }

    componentWillReceiveProps(nextProps) {
        this.setState({jadwal: nextProps.jadwal.jadwal});
    }

    render() {
        let jadwal = this.state.jadwal.map(({hari, tanggal, kelas, mapel}, i) => {
            return (<tr>
                <td>
                    <div className="media-left media-middle">
                        <i className="icon-calendar52 position-left"/>
                    </div>
                    <div className="media-left">
                        <div className=""><a href="#" className="text-default text-semibold">{hari}</a></div>
                        <div className="text-muted text-size-small">
                            <span className="status-mark border-blue position-left"/>
                            {tanggal}
                        </div>
                    </div>
                </td>
                <td>{kelas.desc}</td>
                <td>{mapel.nama}</td>
            </tr>);
        });
        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-home4 position-left" text1="Jadwal" text2="Guru"/>
                <div className="content">
                    <div className="panel panel-flat">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th className="col-md-4">Hari / Tanggal</th>
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