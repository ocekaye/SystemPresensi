/**
 * Created by Hinata on 2/26/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import Navbar from '../Navbar';
import PageContainer from '../PageContainer';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Navbar/>
                <PageContainer/>
            </div>
        );
    }
}