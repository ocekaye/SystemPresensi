/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import Sidebar from '../Sidebar';
import Content from '../Content';

export default class PageContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="page-content">
                    <Sidebar/>
                    {this.props.children}
                    {/*<Content/>*/}
                </div>
            </div>
        );
    }
}