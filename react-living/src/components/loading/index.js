
import React, {Component} from 'react';
import './loading.scss'

export default class Loading extends Component {
    render(){
        return (
            <div className="loading">
                <i className="fa fa-spinner circle"></i>
            </div>
        )
    }
}