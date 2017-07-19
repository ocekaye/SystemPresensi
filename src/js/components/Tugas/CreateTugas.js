/**
 * Created by Hinata on 6/7/2017.
 */
import React from 'react';
import Datetime from 'react-datetime';
import { connect } from "react-redux";

import PageHeader from '../PageHeader';

import {getMapel} from '../../actions/mapelAction';

@connect((state) => state)
export default class CreateTugas extends React.Component {
    state = {
        mapels:[],
    }
    componentWillMount(){
        this.props.dispatch(getMapel());
    }

    componentWillReceiveProps(nextProps) {
        console.log('next prop mapel', nextProps);
        this.setState({mapels: nextProps.mapel.mapels});
    }

    render() {
        const {mapels} = this.state;
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
                                            <input type="text" className="form-control" placeholder="Nama Tugas"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="control-label">Mulai</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="icon-calendar22"/></span>
                                                    <Datetime />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-group">
                                                <label className="control-label">Selesai</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="icon-calendar22"/></span>
                                                    <Datetime />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="form-group" >
                                        <label className="control-label col-lg-2" >Mapel</label>
                                        <div className="col-lg-5">
                                            <select name="select" className="form-control">
                                                {listMapel}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                </form>
                                <div className="col-lg-12" style={{borderTop: '1px solid #e5e5e5', paddingTop:15}}>
                                    <div style={{float:'right'}}>
                                        <button type="button" className="btn bg-teal-400 btn-labeled btn-rounded">
                                            <b><i className="icon-folder-check"/></b>
                                            Save
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
