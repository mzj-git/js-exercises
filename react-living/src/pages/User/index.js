
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';
import Loading from 'components/Loading';
import Header from 'components/Header';
import UserInfo from 'components/UserInfo';
import OrderList from './subPages/OrderList';

class User extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        const userName = this.props.userInfo.userName;
        const cityName = this.props.userInfo.cityName;
        return (
            <div>
                 <Header title="用户主页" backRouter="/"/>
                 <UserInfo userName={userName} cityName={cityName} />
                 <OrderList userName="hha"/>

            </div>            
        )
    }  
    componentDidMount(){
      console.log(this.props)
    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
const mapDispatchToProps = (dispatch)=> {
     return {        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);