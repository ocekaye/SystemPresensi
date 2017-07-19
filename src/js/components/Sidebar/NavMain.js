/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import MenuMain from './MenuMain';
import MenuManage from './MenuManage';
import MenuInfo from './MenuInfo';
import MenuItemParent from './item/MenuItemParent';
import MenuItemParentFetch from './item/MenuItemParentFetch';
import MenuItem from './item/MenuItem';

import { connect } from "react-redux"
import { fetchKelas } from "../../actions/kelasActions"

@connect((store) => {
    return {
        kelas: store.kelas.kelas,
    };
})
export default class NavMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {dashboardActive: "active"};
    }

    componentWillMount() {
        this.props.dispatch(fetchKelas());
    }

    onClickDashboard(current) {
        if (current == "#")
            this.setState({dashboardActive: "active"});
        else if (current == "active")this.setState({dashboardActive: "#"});
    }

    getTugasApi(id){
        return "http://localhost:3000/api/Kelas/"+id+"/tugas/detail";
    }

    render() {
        const { kelas } = this.props;
        let mKelas = [];
        if(kelas.length){
             mKelas = kelas.map((SKelas) => <MenuItem icon="icon-home8" name={SKelas.desc} to={"app/tugas/"+SKelas.id}/>);
            mKelas.unshift(<MenuItem icon="icon-list2" name='Semua' to="app/tugas/all"/>);
        }

        return (
            <div className="sidebar-category sidebar-category-visible">
                <div className="category-content no-padding">
                    <ul className="navigation navigation-main navigation-accordion">
                        <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"/></li>
                        <MenuItem icon="icon-home4" name="Dashboard" to="app/home"/>
                        <MenuItemParent icon="icon-stack-star" name="Nilai Siswa" >
                            <MenuItem icon="icon-bell2" name="Nilai Harian" to="app/nilai/page/harian"/>
                            <MenuItem icon="icon-calendar" name="Nilai Tugas" to="app/nilai/page/tugas" />
                            <li className="navigation-divider" />
                            <MenuItem icon="icon-calendar2" name="Nilai UTS" to="app/nilai/page/uts"/>
                            <MenuItem icon="icon-calendar3" name="Nilai UAS" to="app/nilai/page/uas"/>
                        </MenuItemParent>
                        <MenuItemParent icon="icon-stack-check" name="Presensi" >
                            <MenuItemParent icon="icon-home8" name="Kelas 1" >
                                <MenuItem icon="icon-book" name="Matematika" />
                                <MenuItem icon="icon-book" name="B. Indonesia" />
                                <MenuItem icon="icon-book" name="IPA" />
                                <MenuItem icon="icon-book" name="IPS" />
                            </MenuItemParent>
                            <MenuItemParent icon="icon-home8" name="Kelas 2" >
                                <MenuItem icon="icon-book" name="Matematika" />
                                <MenuItem icon="icon-book" name="B. Indonesia" />
                                <MenuItem icon="icon-book" name="IPA" />
                                <MenuItem icon="icon-book" name="IPS" />
                            </MenuItemParent>
                            <MenuItemParent icon="icon-home8" name="Kelas 3" >
                                <MenuItem icon="icon-book" name="Matematika" />
                                <MenuItem icon="icon-book" name="B. Indonesia" />
                                <MenuItem icon="icon-book" name="IPA" />
                                <MenuItem icon="icon-book" name="IPS" />
                            </MenuItemParent>
                        </MenuItemParent>

                        <MenuItemParent icon="icon-clipboard2" name="Tugas" >
                            {mKelas}
                        </MenuItemParent>



                        <li className="navigation-header"><span>Manage</span> <i className="icon-menu" title="Manage"/></li>
                        <MenuItemParent icon="icon-users4" name="Daftar Siswa">
                          <MenuItem icon="icon-list2" name="Tampilkan Semua" to="app/siswa/tampil"/>
                          <MenuItem icon="icon-plus-circle2" name="Tambah Siswa" to="app/siswa/tambah"/>
                          </MenuItemParent>

                      <MenuItemParent icon="icon-home8" name="Daftar Kelas">
                        <MenuItem icon="icon-list2" name="Tampilkan Semua" to="app/kelas/tampil"/>
                        <MenuItem icon="icon-plus-circle2" name="Tambah Kelas" to="app/kelas/tambah"/>

                      </MenuItemParent>

                      <MenuItemParent icon="icon-users" name="Daftar Guru">
                        <MenuItem icon="icon-list2" name="Tampilkan Semua" to="app/guru/tampil"/>
                        <MenuItem icon="icon-plus-circle2" name="Tambah Kelas" to="app/guru/tambah"/>

                      </MenuItemParent>


                        <li className="navigation-header"><span>Info</span> <i className="icon-menu" title="Info"/></li>
                        <MenuItem icon="icon-calendar52" name="Jadwal" to="app/jadwal"/>
                    </ul>
                </div>
            </div>
        );
    }
}
