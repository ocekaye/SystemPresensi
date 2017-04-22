/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import MenuMain from './MenuMain';
import MenuManage from './MenuManage';
import MenuInfo from './MenuInfo';
import MenuItemParent from './item/MenuItemParent';
import MenuItem from './item/MenuItem';

export default class NavMain extends React.Component {
    constructor(props){
        super(props);
        this.state = {dashboardActive: "active"};
    }

    onClickDashboard(current) {
        if (current == "#")
            this.setState({dashboardActive: "active"});
        else if (current == "active")this.setState({dashboardActive: "#"});
    }

    render() {
        return (
            <div className="sidebar-category sidebar-category-visible">
                <div className="category-content no-padding">
                    <ul className="navigation navigation-main navigation-accordion">

                        {/*main*/}
                        <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"></i></li>
                        <li className={this.state.dashboardActive} onClick={() => this.onClickDashboard(this.state.dashboardActive)}><a><i className="icon-home4"></i> <span>Dashboard</span></a></li>
                        <MenuItemParent link="#" icon="icon-stack-star" name="Nilai Siswa" >
                            <MenuItem icon="icon-bell2" name="Nilai Harian" link="nilai/harian"/>
                            <MenuItem icon="icon-calendar" name="Nilai Tugas"link="nilai/tugas" />
                            <li className="navigation-divider" />
                            <MenuItem icon="icon-calendar2" name="Nilai UTS" link="nilai/uts"/>
                            <MenuItem icon="icon-calendar3" name="Nilai UAS" link="nilai/uas"/>
                        </MenuItemParent>
                        <MenuItemParent link="#" icon="icon-stack-check" name="Presensi" >
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
                        <MenuItemParent link="#" icon="icon-clipboard2" name="Tugas" >
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

                        {/*/main*/}

                        {/*manage*/}
                        <li className="navigation-header"><span>Manage</span> <i className="icon-menu" title="Manage"></i></li>
                        <li>
                            <a><i className="icon-users4"></i> <span>Daftar Siswa</span></a>
                            <ul>
                                <li><a><i className="icon-list2"></i>Tampil Semua</a></li>
                                <li><a><i className="icon-plus-circle2"></i>Tambah Siswa</a></li>
                            </ul>
                        </li>
                        <li>
                            <a><i className="icon-home8"> </i> <span>Daftar Kelas</span></a>
                            <ul>
                                <li><a><i className="icon-list2"></i>Tampil Semua</a></li>
                                <li><a><i className="icon-plus-circle2"></i>Tambah Kelas</a></li>
                            </ul>
                        </li>
                        <li>
                            <a><i className="icon-users"></i> <span>Daftar Guru</span></a>
                            <ul>
                                <li><a><i className="icon-list2"></i>Tampil Semua</a></li>
                                <li><a><i className="icon-plus-circle2"></i>Tambah Guru</a></li>
                            </ul>
                        </li>
                        {/*/manage*/}

                        {/*info*/}
                        <li className="navigation-header"><span>Info</span> <i className="icon-menu" title="Info"></i></li>
                        <li>
                            <a href="#"><i className="icon-calendar52"></i> <span>Jadwal</span></a>
                        </li>
                        {/*/info*/}
                    </ul>
                </div>
            </div>
        );
    }
}