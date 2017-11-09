/**
 * Created by Hinata on 2/26/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import Content from '../Content';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-home4 position-left" text1="Guru">

                </PageHeader>
                <div className="content" style={{textAlign:"center"}}>

                    <img src="./assets/images/osis.png" width={500} height={600}/>

                </div>
            </div>
        );
    }
}