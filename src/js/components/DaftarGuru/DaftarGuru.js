/**
 * Created by TATA on 12/07/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';
import {API_BASE} from '../../utils';
import PageHeaderButton from '../PageHeader/PageHeaderButton';


export default class DaftarGuru extends React.Component {
  constructor() {
    super();
    this.state = {
      DaftarGuru: null
    }
  }


  componentWillMount() {
    this.ngambilData();

  }

  ngambilData() {
    let self = this;
    axios.get(API_BASE + 'Gurus')
      .then(function (response) {
        self.setState({
          DaftarGuru:response.data
        });
      }).catch(function (error) {

    });
  }

  render() {
    const {DaftarGuru} = this.state;
    return (
      <div className="content-wrapper col-lg-12">

        <PageHeader icon="icon-home4 position-left" text1="Daftar Kelas">
          <PageHeaderButton link="#/app/guru/tambah" icon="icon-plus-circle2" iconColor="text-primary" text="Tambah Guru"/>
        </PageHeader>

        <div className="content">
          <div className="panel panel-flat">
            <BootstrapTable data={DaftarGuru} striped hover>
              <TableHeaderColumn isKey dataField='nama'>Nama</TableHeaderColumn>
              <TableHeaderColumn dataField='alamat'>Alamat</TableHeaderColumn>
              <TableHeaderColumn dataField='desc'>Deskripsi</TableHeaderColumn>
              <TableHeaderColumn dataField='image'>Gambar</TableHeaderColumn>
              <TableHeaderColumn dataField='username'>UserName</TableHeaderColumn>
              <TableHeaderColumn dataField='email'>E-Mail</TableHeaderColumn>
            </BootstrapTable>

          </div>

        </div>


      </div>

    );


  }
}


