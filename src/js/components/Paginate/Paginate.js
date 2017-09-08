/**
 * Created by Hinata on 9/9/2017.
 */
import React from 'react';

export default class Paginate extends React.Component {
    state = {
        totalPage: 0,
        page: 0,
        showPerPage:0
    }

    componentWillMount(){
        const {totalPage, page, showPerPage} = this.props;
        this.setState({
            totalPage,
            page,
            showPerPage
        });
    }

    componentWillReceiveProps(nextProps){
        const {totalPage, page, showPerPage} = nextProps;
        this.setState({
            totalPage,
            page,
            showPerPage
        });
    }


    handleClick(page){
        this.props.onPageChange(page);
    }

    hasNext(){
        return this.state.page < this.state.totalPage;
    }

    hasPrev(){
        return this.state.page > 1;
    }

    hasMorePref(){
        const {totalPage, page, showPerPage} = this.state;
        const range = Math.floor(showPerPage/2);
        const lower = (showPerPage%2) == 0 ? 1 : 0;
        return page-range+lower > 1;
    }

    hasMoreNext(){
        const {totalPage, page, showPerPage} = this.state;
        const range = Math.floor(showPerPage/2);
        return totalPage - page > Math.floor(showPerPage/2);
    }

    generatePage(){
        const {totalPage, page, showPerPage} = this.state;
        let pageNumber = [];
        if(totalPage <= showPerPage){
            for (var i = 1; i <= totalPage; i++){
                const l = i;
                pageNumber.push(<button type="button" onClick={(e)=>{this.handleClick(l)}} className={`btn bg-teal-${i == page ? 800 : 400}`}>{i}</button>);
            }
        } else if(totalPage - page < Math.floor(showPerPage/2)) {
            const range = Math.floor(showPerPage/2);
            for (var i = totalPage - showPerPage; i <= totalPage; i++){
                const l = i;
                pageNumber.push(<button type="button" onClick={(e)=>{this.handleClick(l)}} className={`btn bg-teal-${i == page ? 800 : 400}`}>{i}</button>);
            }
        } else {
            const range = Math.floor(showPerPage/2);
            const lower = (showPerPage%2) == 0 ? 1 : 0;
            const first = page-range+lower < 1 ? 1 : page-range+lower;
            const last = page-range+lower < 1 ? showPerPage: page+range;
            for (var i = first; i <= last; i++){
                const l = i;
                pageNumber.push(<button type="button" onClick={(e)=>{this.handleClick(l)}} className={`btn bg-teal-${i == page ? 800 : 400}`}>{i}</button>);
            }
        }

        return pageNumber;

    }

    render() {
        const {totalPage, page, showPerPage} = this.state;
        const first = (
            <button type="button" onClick={()=>{this.handleClick(1)}} className="btn bg-teal-400">
                <i className="icon-arrow-left12" style={{marginRight: -12}}/>
                <i className="icon-arrow-left12"/>
            </button>
        );
        const prev = (<button type="button" onClick={()=>{this.handleClick(page-1)}} className="btn bg-teal-400"><i className="icon-arrow-left12"/></button>);
        const next = (<button type="button" onClick={()=>{this.handleClick(page+1)}} className="btn bg-teal-400"><i className="icon-arrow-right13"/></button>);
        const last = (
            <button type="button" onClick={()=>{this.handleClick(totalPage)}} className="btn bg-teal-400">
                <i className="icon-arrow-right13" style={{marginRight: -12}}/>
                <i className="icon-arrow-right13"/>
            </button>
        );
        const dot = (<button type="button" className="btn bg-teal-400" style={{cursor:'default'}}>...</button>);
        return (
            <div className="btn-group">
                {::this.hasMorePref() ? first : null}
                {::this.hasPrev() ? prev : null}
                {::this.hasMorePref() ? dot : null}
                {::this.generatePage()}
                {::this.hasMoreNext() ? dot : null}
                {::this.hasMoreNext() ? <button type="button" onClick={()=>{this.handleClick(totalPage)}} className='btn bg-teal-400'>{totalPage}</button> : null}
                {::this.hasNext() ? next : null}
                {::this.hasMoreNext() ? last : null}
            </div>
        );
    }
}