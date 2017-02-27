/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import MenuMain from './MenuMain';
import MenuManage from './MenuManage';
import MenuInfo from './MenuInfo';

export default class NavMain extends React.Component {
    render() {
        return (
            <div className="sidebar-category sidebar-category-visible">
                <div className="category-content no-padding">
                    <ul className="navigation navigation-main navigation-accordion">

                        {/*main*/}
                        <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"></i></li>
                        <li className="active"><a href="index.html"><i className="icon-home4"></i> <span>Dashboard</span></a></li>
                        <li>
                            <a href="#"><i className="icon-stack-star"></i> <span>Nilai Siswa</span></a>
                            <ul>
                                <li><a> <i className="icon-bell2"></i>Nilai Harian</a></li>
                                <li><a> <i className="icon-calendar"></i>Nilai Tugas</a></li>
                                <li className="navigation-divider"></li>
                                <li><a> <i className="icon-calendar2"></i>Nilai UTS</a></li>
                                <li><a> <i className="icon-calendar3"></i>Nilai UAS</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="icon-stack-check"></i> <span>Presensi</span></a>
                            <ul>
                                <li>
                                    <a><i className="icon-home8"> </i> Kelas 1</a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i className="icon-home8"></i>Kelas 2 </a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i className="icon-home8"></i>Kelas 3</a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="icon-clipboard2"></i> <span>Tugas</span></a>
                            <ul>
                                <li>
                                    <a><i className="icon-home8"> </i> Kelas 1</a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i className="icon-home8"> </i> Kelas 2 </a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a><i className="icon-home8"> </i> Kelas 3</a>
                                    <ul>
                                        <li><a> <i className="icon-book"></i>Matematika</a></li>
                                        <li><a><i className="icon-book"></i>B. Indonesia</a></li>
                                        <li><a><i className="icon-book"></i>IPA</a></li>
                                        <li><a><i className="icon-book"></i>IPS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

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