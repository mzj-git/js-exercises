//路由入口
import React from 'react';
// BromserRouter作为Router的名字引入 （as） 
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';
// import {Router, Route ,Link, hashHistory, browserHistory} from 'react-router';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();

import Home from 'pages/Home';
import Page1 from 'pages/Page1';
import Counter from 'pages/Counter';
import User from 'pages/User';
import City from 'pages/City';
import Search from 'pages/Search';
import Detail from 'pages/Detail';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';


// console.log('page1',Page1)

// console.log('browserHistory',browserHistory)

const getRouter = ()=> {   
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route  exact  path="/" component={Home} ></Route>
                    <Route  path="/page1" component={Page1} ></Route>
                    <Route  path="/page2" component={Page1} ></Route>
                    <Route  path="/counter" component={Counter} ></Route>
                    <Route  path="/user" component={User} ></Route>
                    <Route  path="/city" component={City} ></Route>
                    <Route  path="/search/:category/:keyword" component={Search} ></Route>
                    <Route  path="/search/:category" component={Search} ></Route>
                    <Route  path="/detail/:goodsId" component={Detail} ></Route>
                    <Route  exact path="/login" component={Login} ></Route>
                    <Route  path='/login/:router' component={Login}></Route>
                    <Route  path="*" component={NotFound} ></Route>
                </Switch>                   
            </div>        
        </Router>
    )
}
   
    
export default getRouter;

/*
    exact: bool
    如果为 true，path 为 '/one' 的路由将不能匹配 '/one/two'，反之，亦然。

    http://www.cnblogs.com/YZH-chengdu/p/6855237.html
    redux 中文文档
    http://cn.redux.js.org/index.html
*/