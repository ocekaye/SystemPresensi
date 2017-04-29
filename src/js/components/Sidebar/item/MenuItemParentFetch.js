/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import MenuItem from './MenuItem';
import MenuItemParent from './MenuItemParent';

import { connect } from "react-redux"
import { fetchKelasTugas } from "../../../actions/kelasActions"

@connect((store) => {
    return {
        tugas: store.kelas.tugas,
    };
})
export default class MenuItemParentFetch extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchKelasTugas(this.props.api));
    }

    render() {
        const { tugas } = this.props;
        let mTugas = [];
        if(tugas.length){
            mTugas = tugas.map((STugas) =>
                <MenuItem
                    icon="icon-book"
                    name={STugas.name} />);

        }
        return (
            <MenuItemParent icon={this.props.icon} name={this.props.name} >
                <MenuItem
                    icon="icon-book"
                    name="nnn" />
            </MenuItemParent>);
    }
}