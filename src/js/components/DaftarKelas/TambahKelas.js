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
                    <legend className="text-bold">Basic inputs</legend>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Default text input</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Password</label>
                      <div className="col-lg-10">
                        <input type="password" className="form-control"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Input with placeholder</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" placeholder="Enter your username..."/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Read only field</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" readonly="readonly" value="read only"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Disabled field</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" disabled="disabled" value="disabled"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Predefined value</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" value="http://"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Default select</label>
                      <div className="col-lg-10">
                        <select name="select" className="form-control">
                          <option value="opt1">Usual select box</option>
                          <option value="opt2">Option 2</option>
                          <option value="opt3">Option 3</option>
                          <option value="opt4">Option 4</option>
                          <option value="opt5">Option 5</option>
                          <option value="opt6">Option 6</option>
                          <option value="opt7">Option 7</option>
                          <option value="opt8">Option 8</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Disabled autocomplete</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" placeholder="Autocomplete is off" autocomplete="off"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Maximum value</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" maxlength="4" placeholder="Maximum 4 characters"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2 cursor-pointer" for="clickable-label">Focus on label click</label>
                      <div className="col-lg-10">
                        <input type="text" className="form-control" id="clickable-label" placeholder="Field focus on label click"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Static text</label>
                      <div className="col-lg-10">
                        <div className="form-control-static">This is a static text</div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="control-label col-lg-2">Textarea</label>
                      <div className="col-lg-10">
                        <textarea rows="5" cols="5" className="form-control" placeholder="Default textarea"></textarea>
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



