
import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';
import './header.scss';

class Header extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="common-header">
                <span className="back-icon" onClick={this.HandleBack.bind(this)}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>         
        )
    }
    HandleBack(){
        let backRouter = this.props.backRouter;
        if(backRouter){
           this.props.history.push(backRouter)
        }else{
            window.history.back();
        }
        
    }
}
export default withRouter(Header);