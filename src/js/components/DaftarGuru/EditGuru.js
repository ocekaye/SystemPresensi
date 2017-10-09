/**
 * Created by TATA on 17/09/2017.
 */
import React from "react";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import axios from "axios";
import {API_BASE} from "../../utils";


@withRouter
@connect((state) => state)
export default class EditGuru extends React.Component{

  state = {
    saving: false,
    guru: null,
    alamat: null,
    tempatlahir: null,
    tanggallahir: null,
    deskripsi: null,
    nomerhp: null,
    image: null,
    username: null,
    email: null,
    id: null
  }

  componentWillMount(){
    const guru = this.props.guru;
    this.setState({
      guru: guru.nama ? guru.nama : '',
      alamat: guru.alamat ? guru.alamat : '',
      tempatlahir: guru.tempat_lahir ? guru.tempat_lahir : '',
      tanggallahir: guru.tanggal_lahir ? guru.tanggal_lahir : '',
      deskripsi: guru.desc ? guru.desc : '',
      nomerhp: guru.no ? guru.no : '',
      image: guru.image ? guru.image : '',
      username: guru.username ? guru.username : '',
      email: guru.email ? guru.email : '',
      id: guru.id
    });


  }

  componentWillReceiveProps(nextProp){
    const guru = nextProp.guru;
    this.setState({
      guru: guru.nama ? guru.nama : '',
      alamat: guru.alamat ? guru.alamat : '',
      tempatlahir: guru.tempat_lahir ? guru.tempat_lahir : '',
      tanggallahir: guru.tanggal_lahir ? guru.tanggal_lahir : '',
      deskripsi: guru.desc ? guru.desc : '',
      nomerhp: guru.no ? guru.no : '',
      image: guru.image ? guru.image : '',
      username: guru.username ? guru.username : '',
      email: guru.email ? guru.email : '',
      id: guru.id
    });
  }


  handleValue(e){
    switch (e.target.name){
      case 'guru':
        this.setState({guru: e.target.value});
        break;
      case 'alamat':
        this.setState({alamat: e.target.value});
        break;
      case "tempatlahir":
        this.setState({tempatlahir: e.target.value});
        break;
      case "tanggallahir":
        this.setState({tanggallahir: e.target.value});
        break;
      case "deskripsi":
        this.setState({deskripsi: e.target.value});
        break;
      case "nomerhp":
        this.setState({nomerhp: e.target.value});
        break;
      case "image":
        this.setState({image: e.target.value});
        break;
      case "username":
        this.setState({username: e.target.value});
        break;
      case "email":
        this.setState({email: e.target.value});
        break;


    }

  }

  save(){
    const{guru, alamat, tempatlahir, tanggallahir, deskripsi, nomerhp, image, username, email, saving, id} = this.state;
    const isValid = (guru && alamat && tempatlahir && tanggallahir && deskripsi && nomerhp && image && username && email );
    const self = this;
    if (isValid){
      this.setState({saving: true});
      let data = {
        "nama": guru,
        "alamat": alamat,
        "tempat_lahir": tempatlahir,
        "tanggal_lahir": tanggallahir,
        "desc": deskripsi,
        "no": nomerhp,
        "image": image,
        "username": username,
        "email": email
      };
      axios.patch(API_BASE+"Gurus/"+id, data).then(function (response) {
        self.setState({saving: false});
        self.props.onEditSuccess();
      })
    }
  }


  render(){
    const{guru, alamat, tempatlahir, tanggallahir, deskripsi, nomerhp, image, username, email, saving} = this.state;
    const isValid = (guru && alamat && tempatlahir && tanggallahir && deskripsi && nomerhp && image && username && email );
    const saveStyle = saving ? "icon-spinner2 spinner" : "icon-folder-check";

    return(
      <div>
        <form className="form-horizontal" action="#">
          <fieldset className="content-group">

            <div className="form-group">
              <label className="control-label col-lg-2">Nama Guru</label>
              <div className="col-lg-10">
                <input type="text" name="guru" value={guru} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Alamat</label>
              <div className="col-lg-10">
                <input type="text" name="alamat" value={alamat} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Tempat Lahir</label>
              <div className="col-lg-10">
                <input type="text" name="tempatlahir" value={tempatlahir} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Tanggal Lahir</label>
              <div className="col-lg-10">
                <input type="text" name="tanggallahir" value={tanggallahir} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Deskripsi</label>
              <div className="col-lg-10">
                <input type="text" name="deskripsi" value={deskripsi} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Nomer HP</label>
              <div className="col-lg-10">
                <input type="text" name="nomerhp" value={nomerhp} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Image</label>
              <div className="col-lg-10">
                <input type="text" name="image" value={image} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">Username</label>
              <div className="col-lg-10">
                <input type="text" name="username" value={username} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-lg-2">EMAIL</label>
              <div className="col-lg-10">
                <input type="text" name="email" value={email} onChange={::this.handleValue} className="form-control"/>
              </div>
            </div>

          </fieldset>
        </form>

        <div className="col-lg-12">
          <div style={{float:'right'}}>
            <button className="btn btn-link" data-dismiss="modal"><i className="icon-cross"/> Cancel</button>
            <button type="button" className="btn bg-teal-400 btn-labeled btn-rounded"
                    style={isValid ? {} : {backgroundColor:"rgba(141, 141, 142, 0.3)"}}
                    onClick={::this.save}>
              <b><i className={saveStyle}/></b>
              {saving ? "Saving": "Save"}
            </button>
          </div>
        </div>
      </div>

    );
  }
}


