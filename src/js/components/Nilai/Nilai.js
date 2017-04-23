/**
 * Created by Hinata on 4/22/2017.
 */
import React from 'react';
import PageHeader from '../PageHeader';
import { connect } from "react-redux"

import { fetchUser } from "../../actions/userActions"
import { fetchTweets } from "../../actions/tweetsActions"

import ll from './ll'

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
export default class Nilai extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchUser());
        this.props.dispatch(fetchTweets());
    }

    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }
    render() {
        const { user, tweets } = this.props;
        let tugas = <div></div>;

        if (tweets.length) {
            const mappedTweets = tweets.map((tweet) => <li>{tweet.nama}</li>);
            tugas = <ul>{mappedTweets}</ul>;
        }

        return (
            <div className="content-wrapper col-lg-12">
                <PageHeader icon="icon-bell2" text1="Nilai" text2={this.props.params.parm}/>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12">
                            {tugas}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}