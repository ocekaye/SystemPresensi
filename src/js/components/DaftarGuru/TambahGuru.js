/**
 * Created by TATA on 22/07/2017.
 */

import React from "react";
import PageHeader from "../PageHeader";


export default class TambahKelas extends React.Component {


  render(){
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
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Alamat</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Tempat Lahir</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Tanggal Lahir</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Deskripsi</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Nomer HP</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Image</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Realm</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Username</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">EMAIL</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Username</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>







                    </fieldset>
                  </form>




                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }





}
