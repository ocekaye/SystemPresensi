/**
 * Created by Hinata on 7/19/2017.
 */
import React from 'react';
import { API_BASE, getAccount, CustomMoment } from '../../utils';
import axios from 'axios';

const DEFAULT_TEXT_NILAI = "Set Nilai";

export default class TextEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            edited: false,
            tugasId: props.tugasId,
            siswaId: props.siswaId,
            text: DEFAULT_TEXT_NILAI,
            nilai: null
        }

    }

    componentWillMount(){
        this.getNilaiSiswa();
    }

    componentDidMount(){
    }

    componentWillReceiveProps(nextProps){

    }

    getNilaiSiswa(){
        const {tugasId, siswaId} = this.state;
        let self = this;
        axios.get(`${API_BASE}Tugas/${tugasId}/nilais`, {params:{filter:{where:{siswaId: siswaId}}}}).then(function (response) {
            if(response.data.length > 0){
                self.setState({
                    text: response.data[0].score,
                    nilai:  response.data[0]
                });
            }
        }).catch(function (error) {
            console.log('error get nilai siswa', error);
        })
    }

    setNilai(value){
        const {tugasId, siswaId, text, nilai} = this.state;
        const url = `${API_BASE}Nilais/${nilai == null ? '' : nilai.id}`;
        const method = (nilai == null) ? 'post' : 'put';
        const data = {
            score: value,
            siswaId: siswaId,
            tugasId: tugasId
        };

        if (nilai){
            data.id = nilai.id;
        }

        let self = this;
        axios[method](url, data).then(function (response) {
            console.log('put nilai', response);
            self.setState({
                nilai: response.data
            });

        }).catch(function (error) {
            console.log('put nilai', error);
        });
    }

    onEdit() {
        this.setState({edited: true});
    }

    onChange(e){
        this.setNilai(e.target.value);
        this.setState({text:  e.target.value});
    }

    onDone(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({edited: false});
    }



    render() {
        const {edited, text} = this.state;

        let view = <div></div>

        if (edited) {
            view = <form className="form-horizontal" action="#">
                <fieldset className="content-group">
                    <div className="form-group">
                        <div className="col-lg-5">
                            <div className="input-group">
                                <input  ref={function(input) {
                                                if (input != null) {
                                                    input.focus();
                                                }
                                            }}
                                        onChange={::this.onChange}
                                        type="number" className="form-control"
                                        style={{width:50, padding:0, textAlign:"center"}}
                                        value={text}/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-success btn-icon"
                                            onClick={::this.onDone}>
                                            <span className="icon-checkmark4"/>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        } else {
            view = <div>{text.length > 0 ? text : "Set Nilai"}</div>
        }

        return (
            <div onClick={::this.onEdit} style={{width:200, height:30}}>{view}</div>

        );
    }
}