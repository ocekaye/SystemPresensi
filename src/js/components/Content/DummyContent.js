/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar} from 'Recharts';
import PageHeader from '../PageHeader';

export default class DummyContent extends React.Component {

    render() {
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        return (
            <div>
               <PageHeader icon="icon-home4 position-left" text1="Dashboard" text2="Guru"/>

                {/*<!-- Content area -->*/}
                <div className="content">

                    {/*<!--status-->*/}
                    <div className="row">
                        <div className="col-lg-12">
                            {/*<!-- Quick stats boxes -->*/}
                            <div className="row">
                                <div className="col-lg-4">
                                    {/*<!-- Members online -->*/}
                                    <div className="panel bg-teal-400">
                                        <div className="panel-body">
                                            <div className="heading-elements">
                                                <span className="heading-text badge bg-teal-800">87,6%</span>
                                            </div>

                                            <h3 className="no-margin">Presensi Siswa</h3>
                                            Kemarin
                                            <div className="text-muted text-size-small">537</div>


                                        </div>

                                        <div className="container-fluid">
                                            <ResponsiveContainer  minHeight={100}>
                                                <BarChart data={data}>
                                                    <Bar dataKey='uv' fill='#92d3cd'/>
                                                </BarChart>
                                            </ResponsiveContainer>

                                        </div>
                                    </div>
                                    {/*<!-- /members online -->*/}

                                </div>

                                <div className="col-lg-4">

                                    {/*<!-- Current server load -->*/}
                                    <div className="panel bg-pink-400">
                                        <div className="panel-body">
                                            <div className="heading-elements">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3"></i> <span className="caret"></span></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                                            <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                                            <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                                            <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>

                                            <h3 className="no-margin">Pengumpulan Tugas</h3>
                                            Karya Ilmiah
                                            <div className="text-muted text-size-small">34.6%</div>
                                        </div>

                                        <div id="server-load"></div>
                                    </div>
                                    {/*<!-- /current server load -->*/}

                                </div>

                                <div className="col-lg-4">

                                    {/*<!-- Today's revenue -->*/}
                                    <div className="panel bg-blue-400">
                                        <div className="panel-body">
                                            <div className="heading-elements">
                                                <ul className="icons-list">
                                                    <li><a data-action="reload"></a></li>
                                                </ul>
                                            </div>

                                            <h3 className="no-margin">Total Mengajar</h3>
                                            Minggu ini
                                            <div className="text-muted text-size-small">28 jam</div>
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                    {/*<!-- /today's revenue -->*/}

                                </div>
                            </div>
                            {/*<!-- /quick stats boxes -->*/}
                        </div>
                    </div>


                    {/*<!-- Dashboard content -->*/}
                    <div className="row">

                        <div className="col-md-12">
                            {/*<!-- Support tickets -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Support Tickets Study Tour</h6>
                                    <div className="heading-elements">
                                        <button type="button" className="btn btn-link daterange-ranges heading-btn text-semibold">
                                            <i className="icon-calendar3 position-left"></i> <span></span> <b className="caret"></b>
                                        </button>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-xlg text-nowrap">
                                        <tbody>
                                        <tr>
                                            <td className="col-md-4">
                                                <div className="media-left media-middle">
                                                    <div id="tickets-status"></div>
                                                </div>

                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">14,327 <small className="text-success text-size-base"><i className="icon-arrow-up12"></i> (+2.9%)</small></h5>
                                                    <span className="text-muted"><span className="status-mark border-success position-left"></span> Jun 16, 10:00 am</span>
                                                </div>
                                            </td>

                                            <td className="col-md-3">
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-xs btn-icon"><i className="icon-alarm-add"></i></a>
                                                </div>

                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">
                                                        1,132 <small className="display-block no-margin">total tickets</small>
                                                    </h5>
                                                </div>
                                            </td>

                                            <td className="col-md-3">
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-xs btn-icon"><i className="icon-spinner11"></i></a>
                                                </div>

                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">
                                                        06:25:00 <small className="display-block no-margin">response time</small>
                                                    </h5>
                                                </div>
                                            </td>

                                            <td className="text-right col-md-2">
                                                <a href="#" className="btn bg-teal-400"><i className="icon-statistics position-left"></i> Report</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            {/*<!-- /support tickets -->*/}
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-8">

                            {/*<!--status kerja-->*/}
                            <div className="row" >
                                <div className="col-md-12">
                                    {/*<!-- Progress counters -->*/}
                                    <div className="row">
                                        <div className="col-md-6">

                                            {/*<!-- Available hours -->*/}
                                            <div className="panel text-center">
                                                <div className="panel-body">
                                                    <div className="heading-elements">
                                                        <ul className="icons-list">
                                                            <li className="dropdown text-muted">
                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3"></i> <span className="caret"></span></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                                                    <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                                                    <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                                                    <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/*<!-- Progress counter -->*/}
                                                    <div className="content-group-sm svg-center position-relative" id="hours-available-progress"></div>
                                                    {/*<!-- /progress counter -->*/}


                                                    {/*<!-- Bars -->*/}
                                                    <div id="hours-available-bars"></div>
                                                    {/*<!-- /bars -->*/}

                                                </div>
                                            </div>
                                            {/*<!-- /available hours -->*/}

                                        </div>

                                        <div className="col-md-6">

                                            {/*<!-- Productivity goal -->*/}
                                            <div className="panel text-center">
                                                <div className="panel-body">
                                                    <div className="heading-elements">
                                                        <ul className="icons-list">
                                                            <li className="dropdown text-muted">
                                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3"></i> <span className="caret"></span></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                                                    <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                                                    <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                                                    <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/*<!-- Progress counter -->*/}
                                                    <div className="content-group-sm svg-center position-relative" id="goal-progress"></div>
                                                    {/*<!-- /progress counter -->*/}

                                                    {/*<!-- Bars -->*/}
                                                    <div id="goal-bars"></div>
                                                    {/*<!-- /bars -->*/}

                                                </div>
                                            </div>
                                            {/*<!-- /productivity goal -->*/}

                                        </div>
                                    </div>
                                    {/*<!-- /progress counters -->*/}
                                </div>
                            </div>
                            {/*<!-- /status kerja-->*/}

                            {/*<!-- Marketing campaigns -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Rata - Rata Nilai</h6>
                                    <div className="heading-elements">
                                        <ul className="icons-list">
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i> <span className="caret"></span></a>
                                                <ul className="dropdown-menu dropdown-menu-right">
                                                    <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                                    <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                                    <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-lg text-nowrap">
                                        <tbody>
                                        <tr>
                                            <td className="col-md-5">
                                                <div className="media-left">
                                                    <div id="campaigns-donut"></div>
                                                </div>

                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">38,289 <small className="text-success text-size-base"><i className="icon-arrow-up12"></i> (+16.2%)</small></h5>
                                                    <ul className="list-inline list-inline-condensed no-margin">
                                                        <li>
                                                            <span className="status-mark border-success"></span>
                                                        </li>
                                                        <li>
                                                            <span className="text-muted">May 12, 12:30 am</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>

                                            <td className="col-md-5">
                                                <div className="media-left">
                                                    <div id="campaign-status-pie"></div>
                                                </div>

                                                <div className="media-left">
                                                    <h5 className="text-semibold no-margin">2,458 <small className="text-danger text-size-base"><i className="icon-arrow-down12"></i> (- 4.9%)</small></h5>
                                                    <ul className="list-inline list-inline-condensed no-margin">
                                                        <li>
                                                            <span className="status-mark border-danger"></span>
                                                        </li>
                                                        <li>
                                                            <span className="text-muted">Jun 4, 4:00 am</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>

                                            <td className="text-right col-md-2">
                                                <a href="#" className="btn bg-indigo-300"><i className="icon-statistics position-left"></i> View report</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th>Kelas</th>
                                            <th className="col-md-2">Wali</th>
                                            <th className="col-md-2">Status</th>
                                            <th className="col-md-2">Nilai Rata</th>
                                            <th className="text-center"><i className="icon-arrow-down12"></i></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="active border-double">
                                            <td colSpan="4">Today</td>
                                            <td className="text-right">
                                                <span className="progress-meter" id="today-progress" data-progress="30"></span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 1 A</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-blue position-left"></span>
                                                        38 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Nurhaliza</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.43%</span></td>
                                            <td><h6 className="text-semibold">68</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 3 C</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-danger position-left"></span>
                                                        41 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Duru Wali</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 3.12%</span></td>
                                            <td><h6 className="text-semibold">73</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 1 B</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-grey-400 position-left"></span>
                                                        29 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Furu Wali</span></td>
                                            <td><span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 8.02%</span></td>
                                            <td><h6 className="text-semibold">74</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 3 C</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-grey-400 position-left"></span>
                                                        37 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Guru Wali</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.78%</span></td>
                                            <td><h6 className="text-semibold">86</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>

                                        <tr className="active border-double">
                                            <td colSpan="4">Yesterday</td>
                                            <td className="text-right">
                                                <span className="progress-meter" id="yesterday-progress" data-progress="65"></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 1 A</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-blue position-left"></span>
                                                        38 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Nurhaliza</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.43%</span></td>
                                            <td><h6 className="text-semibold">68</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 3 C</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-danger position-left"></span>
                                                        41 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Duru Wali</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 3.12%</span></td>
                                            <td><h6 className="text-semibold">73</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 1 B</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-grey-400 position-left"></span>
                                                        29 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Furu Wali</span></td>
                                            <td><span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 8.02%</span></td>
                                            <td><h6 className="text-semibold">74</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#"><img src="assets/images/users/1.png" className="img-circle img-xs" alt="" /></a>
                                                </div>
                                                <div className="media-left">
                                                    <div className=""><a href="#" className="text-default text-semibold">Kelas 3 C</a></div>
                                                    <div className="text-muted text-size-small">
                                                        <span className="status-mark border-grey-400 position-left"></span>
                                                        37 siswa
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="text-muted">Guru Wali</span></td>
                                            <td><span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.78%</span></td>
                                            <td><h6 className="text-semibold">86</h6></td>
                                            <td className="text-center">
                                                <ul className="icons-list">
                                                    <li className="dropdown">
                                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                        <ul className="dropdown-menu dropdown-menu-right">
                                                            <li><a href="#"><i className="icon-file-stats"></i> View statement</a></li>
                                                            <li><a href="#"><i className="icon-file-text2"></i> Edit campaign</a></li>
                                                            <li><a href="#"><i className="icon-file-locked"></i> Disable campaign</a></li>
                                                            <li className="divider"></li>
                                                            <li><a href="#"><i className="icon-gear"></i> Settings</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*<!-- /marketing campaigns -->*/}

                        </div>

                        <div className="col-lg-4">


                            {/*<!-- Daily sales -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Tugas Terkumpul: <span className="text-bold text-danger-600 position-right">683</span></h6>
                                    <div className="heading-elements">
                                        <ul className="icons-list">
                                            <li className="dropdown text-muted">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-cog3"></i> <span className="caret"></span></a>
                                                <ul className="dropdown-menu dropdown-menu-right">
                                                    <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                                    <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                                    <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table text-nowrap">
                                        <thead>
                                        <tr>
                                            <th>Kelas</th>
                                            <th>Waktu</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn bg-primary-400 btn-rounded btn-icon btn-xs">
                                                        <span className="letter-icon"></span>
                                                    </a>
                                                </div>

                                                <div className="media-body">
                                                    <div className="media-heading">
                                                        <a href="#" className="letter-icon-title">Kelas 3 C</a>
                                                    </div>

                                                    <div className="text-muted text-size-small"><i className="icon-checkmark3 text-size-mini position-left"></i> New order</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-muted text-size-small">06:28 pm</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn bg-danger-400 btn-rounded btn-icon btn-xs">
                                                        <span className="letter-icon"></span>
                                                    </a>
                                                </div>

                                                <div className="media-body">
                                                    <div className="media-heading">
                                                        <a href="#" className="letter-icon-title">Kelas 1 E</a>
                                                    </div>

                                                    <div className="text-muted text-size-small"><i className="icon-spinner11 text-size-mini position-left"></i> Renewal</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-muted text-size-small">04:52 pm</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn bg-indigo-400 btn-rounded btn-icon btn-xs">
                                                        <span className="letter-icon"></span>
                                                    </a>
                                                </div>

                                                <div className="media-body">
                                                    <div className="media-heading">
                                                        <a href="#" className="letter-icon-title">Kelas 1 B</a>
                                                    </div>

                                                    <div className="text-muted text-size-small"><i className="icon-lifebuoy text-size-mini position-left"></i> Support</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-muted text-size-small">01:26 pm</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn bg-success-400 btn-rounded btn-icon btn-xs">
                                                        <span className="letter-icon"></span>
                                                    </a>
                                                </div>

                                                <div className="media-body">
                                                    <div className="media-heading">
                                                        <a href="#" className="letter-icon-title">Kelas 1 F</a>
                                                    </div>

                                                    <div className="text-muted text-size-small"><i className="icon-lifebuoy text-size-mini position-left"></i> Support</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-muted text-size-small">11:46 am</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="media-left media-middle">
                                                    <a href="#" className="btn bg-danger-400 btn-rounded btn-icon btn-xs">
                                                        <span className="letter-icon"></span>
                                                    </a>
                                                </div>

                                                <div className="media-body">
                                                    <div className="media-heading">
                                                        <a href="#" className="letter-icon-title">Kelas 3 B</a>
                                                    </div>

                                                    <div className="text-muted text-size-small"><i className="icon-spinner11 text-size-mini position-left"></i> Renewal</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-muted text-size-small">10:29 am</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*<!-- /daily sales -->*/}


                            {/*<!-- My messages -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">My messages</h6>
                                    <div className="heading-elements">
                                        <span className="heading-text"><i className="icon-history text-warning position-left"></i> Jul 7, 10:30</span>
                                        <span className="label bg-success heading-text">Online</span>
                                    </div>
                                </div>

                                {/*<!-- Numbers -->*/}
                                <div className="container-fluid">
                                    <div className="row text-center">
                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h6 className="text-semibold no-margin"><i className="icon-clipboard3 position-left text-slate"></i> 2,345</h6>
                                                <span className="text-muted text-size-small">this week</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h6 className="text-semibold no-margin"><i className="icon-calendar3 position-left text-slate"></i> 3,568</h6>
                                                <span className="text-muted text-size-small">this month</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h6 className="text-semibold no-margin"><i className="icon-comments position-left text-slate"></i> 32,693</h6>
                                                <span className="text-muted text-size-small">all messages</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!-- /numbers -->*/}


                                {/*<!-- Area chart -->*/}
                                <div id="messages-stats"></div>
                                {/*<!-- /area chart -->*/}


                                {/*<!-- Tabs -->*/}
                                <ul className="nav nav-lg nav-tabs nav-justified no-margin no-border-radius bg-indigo-400 border-top border-top-indigo-300">
                                    <li className="active">
                                        <a href="#messages-tue" className="text-size-small text-uppercase" data-toggle="tab">
                                            Tuesday
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#messages-mon" className="text-size-small text-uppercase" data-toggle="tab">
                                            Monday
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#messages-fri" className="text-size-small text-uppercase" data-toggle="tab">
                                            Friday
                                        </a>
                                    </li>
                                </ul>
                                {/*<!-- /tabs -->*/}


                                {/*<!-- Tabs content -->*/}
                                <div className="tab-content">
                                    <div className="tab-pane active fade in has-padding" id="messages-tue">
                                        <ul className="media-list">
                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-xs" alt="" />
                                                    <span className="badge bg-danger-400 media-badge">8</span>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        User Lain
                                                        <span className="media-annotation pull-right">14:58</span>
                                                    </a>

                                                    <span className="display-block text-muted">The constitutionally inventoried precariously...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-xs" alt="" />
                                                    <span className="badge bg-danger-400 media-badge">6</span>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Margo Baker
                                                        <span className="media-annotation pull-right">12:16</span>
                                                    </a>

                                                    <span className="display-block text-muted">Pinched a well more moral chose goodness...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-xs" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Jeremy Victorino
                                                        <span className="media-annotation pull-right">09:48</span>
                                                    </a>

                                                    <span className="display-block text-muted">Pert thickly mischievous clung frowned well...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-xs" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Beatrix Diaz
                                                        <span className="media-annotation pull-right">05:54</span>
                                                    </a>

                                                    <span className="display-block text-muted">Nightingale taped hello bucolic fussily cardinal...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-xs" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Richard Vango
                                                        <span className="media-annotation pull-right">01:43</span>
                                                    </a>

                                                    <span className="display-block text-muted">Amidst roadrunner distantly pompously where...</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade has-padding" id="messages-mon">
                                        <ul className="media-list">
                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Isak Temes
                                                        <span className="media-annotation pull-right">Tue, 19:58</span>
                                                    </a>

                                                    <span className="display-block text-muted">Reasonable palpably rankly expressly grimy...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Vittorio Cosgrove
                                                        <span className="media-annotation pull-right">Tue, 16:35</span>
                                                    </a>

                                                    <span className="display-block text-muted">Arguably therefore more unexplainable fumed...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Hilary Talaugon
                                                        <span className="media-annotation pull-right">Tue, 12:16</span>
                                                    </a>

                                                    <span className="display-block text-muted">Nicely unlike porpoise a kookaburra past more...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Bobbie Seber
                                                        <span className="media-annotation pull-right">Tue, 09:20</span>
                                                    </a>

                                                    <span className="display-block text-muted">Before visual vigilantly fortuitous tortoise...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Walther Laws
                                                        <span className="media-annotation pull-right">Tue, 03:29</span>
                                                    </a>

                                                    <span className="display-block text-muted">Far affecting more leered unerringly dishonest...</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="tab-pane fade has-padding" id="messages-fri">
                                        <ul className="media-list">
                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Owen Stretch
                                                        <span className="media-annotation pull-right">Mon, 18:12</span>
                                                    </a>

                                                    <span className="display-block text-muted">Tardy rattlesnake seal raptly earthworm...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Jenilee Mcnair
                                                        <span className="media-annotation pull-right">Mon, 14:03</span>
                                                    </a>

                                                    <span className="display-block text-muted">Since hello dear pushed amid darn trite...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Alaster Jain
                                                        <span className="media-annotation pull-right">Mon, 13:59</span>
                                                    </a>

                                                    <span className="display-block text-muted">Dachshund cardinal dear next jeepers well...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Sigfrid Thisted
                                                        <span className="media-annotation pull-right">Mon, 09:26</span>
                                                    </a>

                                                    <span className="display-block text-muted">Lighted wolf yikes less lemur crud grunted...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/users/1.png" className="img-circle img-sm" alt="" />
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">
                                                        Sherilyn Mckee
                                                        <span className="media-annotation pull-right">Mon, 06:38</span>
                                                    </a>

                                                    <span className="display-block text-muted">Less unicorn a however careless husky...</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*<!-- /tabs content -->*/}

                            </div>
                            {/*<!-- /my messages -->*/}

                        </div>
                    </div>
                    {/*<!-- /dashboard content -->*/}

                    <div className="col-md-12">
                        {/*<!-- Latest posts -->*/}
                        <div className="panel panel-flat">
                            <div className="panel-heading">
                                <h6 className="panel-title">Latest posts</h6>
                                <div className="heading-elements">
                                    <ul className="icons-list">
                                        <li><a data-action="collapse"></a></li>
                                        <li><a data-action="reload"></a></li>
                                        <li><a data-action="close"></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="media-list content-group">
                                            <li className="media stack-media-on-mobile">
                                                <div className="media-left">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="assets/images/users/1.png" className="img-responsive img-rounded media-preview" alt="" />
                                                            <span className="zoom-image"><i className="icon-play3"></i></span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="media-body">
                                                    <h6 className="media-heading"><a href="#">Up unpacked friendly</a></h6>
                                                    <ul className="list-inline list-inline-separate text-muted mb-5">
                                                        <li><i className="icon-book-play position-left"></i> Video tutorials</li>
                                                        <li>14 minutes ago</li>
                                                    </ul>
                                                    The him father parish looked has sooner. Attachment frequently gay terminated son...
                                                </div>
                                            </li>

                                            <li className="media stack-media-on-mobile">
                                                <div className="media-left">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="assets/images/users/1.png" className="img-responsive img-rounded media-preview" alt="" />
                                                            <span className="zoom-image"><i className="icon-play3"></i></span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="media-body">
                                                    <h6 className="media-heading"><a href="#">It allowance prevailed</a></h6>
                                                    <ul className="list-inline list-inline-separate text-muted mb-5">
                                                        <li><i className="icon-book-play position-left"></i> Video tutorials</li>
                                                        <li>12 days ago</li>
                                                    </ul>
                                                    Alteration literature to or an sympathize mr imprudence. Of is ferrars subject as enjoyed...
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-lg-6">
                                        <ul className="media-list content-group">
                                            <li className="media stack-media-on-mobile">
                                                <div className="media-left">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="assets/images/placeholder.jpg" className="img-responsive img-rounded media-preview" alt="" />
                                                            <span className="zoom-image"><i className="icon-play3"></i></span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="media-body">
                                                    <h6 className="media-heading"><a href="#">Case read they must</a></h6>
                                                    <ul className="list-inline list-inline-separate text-muted mb-5">
                                                        <li><i className="icon-book-play position-left"></i> Video tutorials</li>
                                                        <li>20 hours ago</li>
                                                    </ul>
                                                    On it differed repeated wandered required in. Then girl neat why yet knew rose spot...
                                                </div>
                                            </li>

                                            <li className="media stack-media-on-mobile">
                                                <div className="media-left">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="assets/images/placeholder.jpg" className="img-responsive img-rounded media-preview" alt="" />
                                                            <span className="zoom-image"><i className="icon-play3"></i></span>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="media-body">
                                                    <h6 className="media-heading"><a href="#">Too carriage attended</a></h6>
                                                    <ul className="list-inline list-inline-separate text-muted mb-5">
                                                        <li><i className="icon-book-play position-left"></i> FAQ section</li>
                                                        <li>2 days ago</li>
                                                    </ul>
                                                    Marianne or husbands if at stronger ye. Considered is as middletons uncommonly...
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!-- /latest posts -->*/}
                    </div>

                    {/*<!-- Main charts -->*/}
                    <div className="row">
                        <div className="col-lg-7">

                            {/*<!-- Traffic sources -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Traffic Tugas</h6>
                                    <div className="heading-elements">
                                        <form className="heading-form" action="#">
                                            <div className="form-group">
                                                <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                                                    <input type="checkbox" className="switch" checked="checked" />
                                                    Live update:
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <ul className="list-inline text-center">
                                                <li>
                                                    <a href="#" className="btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-plus3"></i></a>
                                                </li>
                                                <li className="text-left">
                                                    <div className="text-semibold">New visitors</div>
                                                    <div className="text-muted">2,349 avg</div>
                                                </li>
                                            </ul>

                                            <div className="col-lg-10 col-lg-offset-1">
                                                <div className="content-group" id="new-visitors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <ul className="list-inline text-center">
                                                <li>
                                                    <a href="#" className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-watch2"></i></a>
                                                </li>
                                                <li className="text-left">
                                                    <div className="text-semibold">New sessions</div>
                                                    <div className="text-muted">08:20 avg</div>
                                                </li>
                                            </ul>

                                            <div className="col-lg-10 col-lg-offset-1">
                                                <div className="content-group" id="new-sessions"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <ul className="list-inline text-center">
                                                <li>
                                                    <a href="#" className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-people"></i></a>
                                                </li>
                                                <li className="text-left">
                                                    <div className="text-semibold">Total online</div>
                                                    <div className="text-muted"><span className="status-mark border-success position-left"></span> 5,378 avg</div>
                                                </li>
                                            </ul>

                                            <div className="col-lg-10 col-lg-offset-1">
                                                <div className="content-group" id="total-online"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="position-relative" id="traffic-sources"></div>
                            </div>
                            {/*<!-- /traffic sources -->*/}

                        </div>

                        <div className="col-lg-5">

                            {/*<!-- Sales stats -->*/}
                            <div className="panel panel-flat">
                                <div className="panel-heading">
                                    <h6 className="panel-title">Sales statistics</h6>
                                    <div className="heading-elements">
                                        <form className="heading-form" action="#">
                                            <div className="form-group">
                                                <select className="change-date select-sm" id="select_date">
                                                    <optgroup label="<i class='icon-watch pull-right'></i> Time period">
                                                        <option value="val1">June, 29 - July, 5</option>
                                                        <option value="val2">June, 22 - June 28</option>
                                                        <option value="val3" selected="selected">June, 15 - June, 21</option>
                                                        <option value="val4">June, 8 - June, 14</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="container-fluid">
                                    <div className="row text-center">
                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h5 className="text-semibold no-margin"><i className="icon-calendar5 position-left text-slate"></i> 5,689</h5>
                                                <span className="text-muted text-size-small">orders weekly</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h5 className="text-semibold no-margin"><i className="icon-calendar52 position-left text-slate"></i> 32,568</h5>
                                                <span className="text-muted text-size-small">orders monthly</span>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="content-group">
                                                <h5 className="text-semibold no-margin"><i className="icon-cash3 position-left text-slate"></i> $23,464</h5>
                                                <span className="text-muted text-size-small">average revenue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-group-sm" id="app_sales"></div>
                                <div id="monthly-sales-stats"></div>
                            </div>
                            {/*<!-- /sales stats -->*/}

                        </div>
                    </div>
                    {/*<!-- /main charts -->*/}





                    {/*<!-- Footer -->*/}
                    <div className="footer text-muted">
                        &copy; 2015. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
                    </div>
                    {/*<!-- /footer -->*/}

                </div>
                {/*<!-- /content area -->*/}
            </div>
        );
    }
}