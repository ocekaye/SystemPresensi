/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import MenuItemParent from './item/MenuItemParent';
import MenuItem from './item/MenuItem';

export default class MenuMain extends React.Component {
    constructor(){
        super();
        this.state = {dashboardActive: "activess"};
    }

    onClickDashboard(){
        if (this.state.dashboardActive === "#")
            setState(dashboardActive, "active");
        else setState(dashboardActive, "#");
    }

    render() {

        return (
            <div>
                <li className={this.state.dashboardActive} onClick={this.onClickDashboard}><a><i className="icon-home4" /> <span>Dashboard</span></a></li>
                <MenuItemParent link="#" icon="icon-stack-star" name="Nilai Siswa" >
                    <MenuItem icon="icon-bell2" name="Nilai Harian" />
                    <MenuItem icon="icon-calendar" name="Nilai Tugas" />
                    <li className="navigation-divider" />
                    <MenuItem icon="icon-calendar2" name="Nilai UTS" />
                    <MenuItem icon="icon-calendar3" name="Nilai UAS" />
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
            </div>
        );
    }
}