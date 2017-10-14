/**
 * Created by TATA on 17/07/2017.
 */
import React from "react";
import PageHeader from "../PageHeader";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import axios from "axios";
import {API_BASE} from "../../utils";

@withRouter
@connect((state) => state)
export default class EditKelas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      saving: false,
      namaKelas: props.kelasDetail.nama,
      deskripsi: props.kelasDetail.desc,
      tag: props.kelasDetail.tag,
      id: props.kelasDetail.id
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      namaKelas: props.kelasDetail.nama,
      deskripsi: props.kelasDetail.desc,
      tag: props.kelasDetail.tag,
      id: props.kelasDetail.id,
      saving: false
    });
  }

  handleValue(e){
    switch (e.target.name){
      case 'kelas':
        this.setState({namaKelas: e.target.value});
        break;
      case 'deskripsi':
        this.setState({deskripsi: e.target.value});
        break;
      case 'tag':
        this.setState({tag: e.target.value});
            break;

    }

  }

  save(){
    const{namaKelas, tag, deskripsi, saving, id} = this.state;
    const isValid = (namaKelas && tag && deskripsi);
    const toGo = this.props.router;
    if (isValid){
      this.setState({saving: true});
      let data = {
        "nama": namaKelas,
        "desc": deskripsi,
        "tag": tag,
      };
      let self = this;
      axios.put(API_BASE+"Kelas/"+id, data).then(function (response) {
        self.props.onEditSuccess();
      })
    }


  }



  render() {
    const{namaKelas, tag, deskripsi, saving} = this.state;
    const isValid = (namaKelas && tag && deskripsi);
    const saveStyle = saving ? "icon-spinner2 spinner" : "icon-folder-check";


    return (
      <div className="content-wrapper col-lg-12">
        <div className="content">
          <div className="panel panel-flat">
            <div className="row">
              <div className="panel-body">

                <form className="form-horizontal" action="#">
                  <fieldset className="content-group">
                    <legend className="text-bold">Edit Data Kelas</legend>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Kelas</label>
                      <div className="col-lg-10">
                        <select name="kelas" onChange={::this.handleValue} className="form-control">
                          <option value="PilihKelas">PilihKelas</option>
                          <option value="Satu" selected={(namaKelas === "Satu")}>Satu</option>
                          <option value="Dua" selected={(namaKelas === "Dua")}>Dua</option>
                          <option value="Tiga" selected={(namaKelas === "Tiga")}>Tiga</option>

                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Tag</label>
                      <div className="col-lg-10">
                        <input placeholder="ex : A, B, or C" value={tag} type="text" name="tag" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Deskripsi</label>
                      <div className="col-lg-10">
                        <input type="text" name="deskripsi" value={deskripsi} onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                  </fieldset>
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



