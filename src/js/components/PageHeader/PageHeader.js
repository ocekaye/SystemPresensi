/**
 * Created by Hinata on 2/28/2017.
 */
import React from 'react';
import { withRouter } from 'react-router';

@withRouter
export default class PageHeader extends React.Component {
    state = {
        text1: '',
        text2: '',
        icon: '',
    }
    componentWillMount(){
        console.log('props', this.props);
        this.setState({
            text1: this.props.text1,
            text2: this.props.text2,
            icon: this.props.icon,
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            text1: nextProps.text1,
            text2: nextProps.text2,
            icon: nextProps.icon,
        });
    }
    render() {
        const {routes} = this.props;
        const {text1, text2 , icon} = this.state;
        // let route = routes.map();

        return (
        <div className="page-header page-header-default">
            <div className="page-header-content">
                <div className="page-title">
                    <h4><i className={icon} /> <span className="text-semibold">{text1}</span> {text2 ? " - "+text2 : ""}</h4>
                </div>

                <div className="heading-elements">
                    <div className="heading-btn-group">
                        {this.props.children}
                    </div>
                </div>
            </div>

            <div className="breadcrumb-line">
                <ul className="breadcrumb">
                   {/* <li><i className="icon-home2 position-left"/> Home</li>
                    <li className="active">Dashboard</li>*/}
                    {routes.map((data, i)=>{
                        if (i == 0){
                          return(<li><i className="icon-home2 position-left"/> App</li>)
                        }
                        return(<li>{data.path.split('/')[0]}</li>);
                    })}
                </ul>

                <ul className="breadcrumb-elements">
                    {this.props.breadcrumbElements ? this.props.breadcrumbElements : null}
                </ul>
            </div>
        </div>
        );
    }
}
