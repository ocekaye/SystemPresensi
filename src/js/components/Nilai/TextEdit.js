/**
 * Created by Hinata on 7/19/2017.
 */
import React from 'react';

export default class TextEdit extends React.Component {
    state = {
        edited: false,
        text: "Set Nilai"
    }

    componentDidMount(){
    }

    onEdit() {
        this.setState({edited: true});
    }

    onChange(e){
        this.setState({text:  e.target.value});
    }

    onDone(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({edited: false});
    }



    render() {
        const {edited, text} = this.state;

        let view = <div></div>

        if (edited) {
            view = <form className="form-horizontal" action="#">
                <fieldset className="content-group">
                    <div className="form-group">
                        <div className="col-lg-5">
                            <div className="input-group">
                                <input  ref={function(input) {
                                                if (input != null) {
                                                    input.focus();
                                                }
                                            }}
                                        onChange={::this.onChange}
                                        type="number" className="form-control"
                                        style={{width:50, padding:0, textAlign:"center"}}
                                        value={text}/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-success btn-icon"
                                            onClick={::this.onDone}>
                                            <span className="icon-checkmark4"/>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        } else {
            view = <div>{text.length > 0 ? text : "Set Nilai"}</div>
        }

        return (
            <div onClick={::this.onEdit} style={{width:200, height:30}}>{view}</div>

        );
    }
}