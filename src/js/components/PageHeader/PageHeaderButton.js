/**
 * Created by Hinata on 6/7/2017.
 */
import React from 'react';

export default class PageHeaderButton extends React.Component {
    render() {
        const {link, icon, iconColor, text} = this.props;
        return (
            <a href={link} className="btn btn-link btn-float has-text"><i className={icon+" "+iconColor}/><span>{text}</span></a>
        );
    }
}