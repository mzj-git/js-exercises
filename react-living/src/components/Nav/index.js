
import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, hashHistory, browserHistory} from 'react-router-dom';

export default class Nav extends Component {
    render(){
        return (
            <Router>
                <ul>
                    <li> <Link to="/">Home页面</Link></li>
                    <li> <Link to="/page1">Page1页面</Link></li>
                    <li> <Link to="/page2">Page2页面</Link></li>
                    <li> <Link to="/counter">Counter页面</Link></li>
                    <li> <Link to="/user">User页面</Link></li>
                    <li> <Link to="/city">City页面</Link></li>
                </ul> 
            </Router>
        )
    }
}