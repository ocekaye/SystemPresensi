/**
 * Created by TATA on 09/07/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PageHeaderButton from '../PageHeader/PageHeaderButton';
import axios from 'axios';
import {API_BASE} from '../../utils';


export default class DaftarKelas extends React.Component {
  constructor() {
    super();
    this.state = {
      DaftarKelas: null
    }
  }

  componentWillMount(){
    this.ngambilData();

  }

  ngambilData(){
    let self=this;
    axios.get(API_BASE + 'Kelas')
      .then(function (response) {
        self.setState({
          DaftarKelas:response.data
        });

       }).catch(function (error) {

        });
  }



  render() {
    const {DaftarKelas} = this.state;
    return (
      <div className="content-wrapper col-lg-12">
        <PageHeader icon="icon-home4 position-left" text1="Daftar Kelas">
          <PageHeaderButton link="#/app/kelas/tambah" icon="icon-plus-circle2" iconColor="text-primary" text="Tambah Kelas"/>
        </PageHeader>
        <div className="content">
          <div className="panel panel-flat">
            <BootstrapTable data={DaftarKelas} striped hover>
                <TableHeaderColumn isKey dataField='nama'>Nama</TableHeaderColumn>
                <TableHeaderColumn dataField='desc'>Deskripsi</TableHeaderColumn>
                <TableHeaderColumn dataField='tag'>Tag</TableHeaderColumn>
            </BootstrapTable>

            </div>

          </div>




      </div>

    );


  }

}
