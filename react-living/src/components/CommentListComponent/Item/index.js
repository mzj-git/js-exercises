import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link,withRouter} from 'react-router-dom';
import Star from 'components/Star'
import './item.scss';

export default class Item extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        let data = this.props.data;
        return (
            <div className="comment-item">
                <h3>
                    <i className="fa fa-user"></i>
                    &nbsp;
                    {data.username}
                </h3>
                <Star num ={data.star}/>
                <p>{data.comment}</p>
            </div>
        )
    }
 
}