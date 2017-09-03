/**
 * Created by TATA on 27/08/2017.
 */

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import { API_BASE, webStorage } from '../../utils';


export default class TambahSiswaKelas extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSiswa: null
    }
  }

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    let self = this;
    axios.get(API_BASE + 'Siswas/', {
      headers: {'Authorization': ""}
    }).then(function (response) {
      self.setState({
        dataSiswa: response.data
      });
    }).catch(function (error) {
      console.error(error);
    })
  }

  render() {

    let self = this;

    const {dataSiswa} = this.state;
    let datas = [];

    if (dataSiswa != null)datas = dataSiswa;

    return (


        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <BootstrapTable data={datas} striped hover >
                <TableHeaderColumn isKey dataField='nama'>Nama</TableHeaderColumn>
                <TableHeaderColumn dataField='alamat'>Alamat</TableHeaderColumn>
                <TableHeaderColumn dataField='tanggal_lahir'>Tanggal Lahir</TableHeaderColumn>
                <TableHeaderColumn dataField='tempat_lahir'>Tempat Lahir</TableHeaderColumn>
                <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                <TableHeaderColumn dataField='desc'>Description</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>

    );
  }
}
