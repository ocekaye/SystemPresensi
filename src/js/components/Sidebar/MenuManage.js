/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import { Link } from 'react-router';

export default class MenuManage extends React.Component {
    render() {
        return (
            <div>
                <li className="navigation-header"><span>Manage</span> <i className="icon-menu" title="Manage"></i></li>
                <li>
                    <a><i className="icon-users4"></i> <span>Daftar Siswa</span></a>
                    <ul>
                        <li>
                            <a href="http://localhost:8080/#/"><i className="icon-list2"></i>Tampil Semua</a>
                        </li>
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
            </div>
        );
    }
}