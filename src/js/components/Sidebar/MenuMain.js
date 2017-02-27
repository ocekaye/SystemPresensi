/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';

export default class MenuMain extends React.Component {
    render() {

        return (
            <div>
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
            </div>
        );
    }
}