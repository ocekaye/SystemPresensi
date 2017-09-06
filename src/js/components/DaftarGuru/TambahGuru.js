/**
 * Created by TATA on 22/07/2017.
 */

import React from "react";
import PageHeader from "../PageHeader";
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import axios from "axios";
import {API_BASE} from "../../utils";


@withRouter
@connect((state) => state)
export default class TambahGuru extends React.Component {

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
    password: null,
    email: null,

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
      case "password":
        this.setState({password: e.target.value});
        break;
      case "email":
        this.setState({email: e.target.value});
        break;


    }

  }

  save(){
    const{guru, alamat, tempatlahir, tanggallahir, deskripsi, nomerhp, image, username, password, email, saving} = this.state;
    const isValid = (guru && alamat && tempatlahir && tanggallahir && deskripsi && nomerhp && image && username && password && email );
    const toGo = this.props.router;
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
        "password": password,
        "email": email,
        "password":"123"
      };
      axios.post(API_BASE+"Gurus", data).then(function (response) {
        toGo.replace('app/guru/tampil');
      })
    }


  }


  render(){
    const{guru, alamat, tempatlahir, tanggallahir, deskripsi, nomerhp, image, username, password, email, saving} = this.state;
    const isValid = (guru && alamat && tempatlahir && tanggallahir && deskripsi && nomerhp && image && username && password && email );
    const saveStyle = saving ? "icon-spinner2 spinner" : "icon-folder-check";

    return(
      <div className="content-wrapper col-lg-12">
        <PageHeader icon="icon-pencil5 position-left" text1="Tambah Guru"/>
        <div className="content">
          <div className="panel panel-flat">
            <div className="row">
              <div className="panel-body">

                <form className="form-horizontal" action="#">
                  <fieldset className="content-group">
                    <legend className="text-bold">Tambahkan Data Guru</legend>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Nama Guru</label>
                      <div className="col-lg-10">
                        <input type="text" name="guru" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Alamat</label>
                      <div className="col-lg-10">
                        <input type="text" name="alamat" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Tempat Lahir</label>
                      <div className="col-lg-10">
                        <input type="text" name="tempatlahir" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Tanggal Lahir</label>
                      <div className="col-lg-10">
                        <input type="text" name="tanggallahir" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Deskripsi</label>
                      <div className="col-lg-10">
                        <input type="text" name="deskripsi" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Nomer HP</label>
                      <div className="col-lg-10">
                        <input type="text" name="nomerhp" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Image</label>
                      <div className="col-lg-10">
                        <input type="text" name="image" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Username</label>
                      <div className="col-lg-10">
                        <input type="text" name="username" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Password</label>
                      <div className="col-lg-10">
                        <input type="text" name="password" onChange={::this.handleValue} className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">EMAIL</label>
                      <div className="col-lg-10">
                        <input type="text" name="email" onChange={::this.handleValue} className="form-control"/>
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
