/**
 * Created by TATA on 09/07/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import PageHeaderButton from '../PageHeader/PageHeaderButton';
import axios from 'axios';
import {API_BASE} from '../../utils';
import { withRouter } from 'react-router';

@withRouter
export default class DaftarKelas extends React.Component {
  constructor() {
    super();
    this.state = {
      DaftarKelas: []
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

  gotoDetail(kelas){
      this.props.router.push('app/kelas/detail/'+kelas.id);
  }

  render() {
    const {DaftarKelas} = this.state;
    let kelas = DaftarKelas.map((kelas, index)=>{
        const bg = ['blue', 'red', 'green', 'aqua', 'coral'];
        let bgW = index;
        if (index > bg.length - 1){
            bgW = index%bg.length;
        }
        const iconStyle = {
            height: 50,
            width:50,
            paddingTop: 10,
            fontSize: 30,
            color: 'white',
            backgroundColor: bg[bgW],
        };
        return(
            <div className="col-lg-4 col-sm-6" key={index}>
                <div className="panel panel-flat">
                    <div className="panel-heading" style={{paddingTop:10, paddingBottom: 5}}>
                        <h6 className="panel-title">{kelas.desc}</h6>
                        <div className="heading-elements">
                            <ul className="icons-list">
                                <li style={{color: "blue"}}>
                                    <a>
                                        <i className="icon-profile" data-toggle="modal" data-target="#modal_detail"
                                        onClick={()=> {this.gotoDetail(kelas)}}/>
                                    </a>
                                </li>
                                <li style={{color: "green"}}>
                                    <a>
                                        <i className="icon-pencil5" data-toggle="modal" data-target="#modal_edit"/>
                                    </a>
                                </li>
                                <li style={{color: "red"}}>
                                    <a>
                                        <i className="icon-trash" data-toggle="modal" data-target="#modal_hapus"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel-body cursor-pointer" onClick={()=> {this.gotoDetail(kelas)}}>
                        <div className="row">
                            <div className="col-xs-3" style={{fontSize:24}}>
                                <i className="icon-users4 img-circle" style={iconStyle}/>
                            </div>
                            <div className="col-xs-9" style={{overflow: "hidden"}}>
                                <div>{kelas.nama}</div>
                                <div>{kelas.desc}</div>
                                <div>{kelas.tag}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
      <div className="content-wrapper col-lg-12">
        <PageHeader icon="icon-home4 position-left" text1="Daftar Kelas">
          <PageHeaderButton link="#/app/kelas/tambah" icon="icon-plus-circle2" iconColor="text-primary" text="Tambah Kelas"/>
        </PageHeader>
        <div className="content">
            <div className="row">
                {kelas}
            </div>
        </div>
      </div>
    );
  }
}
