/**
 * Created by TATA on 17/07/2017.
 */
import React from "react";
import PageHeader from "../PageHeader";


export default class TambahKelas extends React.Component {


  render() {
    return (
      <div className="content-wrapper col-lg-12">
        <PageHeader icon="icon-pencil5 position-left" text1="Tambah Kelas"/>
        <div className="content">
          <div className="panel panel-flat">
            <div className="row">
              <div className="panel-body">

                <form className="form-horizontal" action="#">
                  <fieldset className="content-group">
                    <legend className="text-bold">Tambah Data Kelas</legend>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Nama Kelas</label>
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
                      <label className="control-label col-lg-2">Tag Kelas</label>
                      <div className="col-lg-10">
                        <select name="select" className="form-control">
                          <option value="opt1">Satu A</option>
                          <option value="opt2">Satu B</option>
                          <option value="opt3">Satu C</option>
                          <option value="opt4">Satu D</option>
                          <option value="opt5">Satu E</option>
                          <option value="opt6">Satu F</option>
                          <option value="opt7">Satu G</option>
                          <option value="opt8">Saty H</option>
                        </select>
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



