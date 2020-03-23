
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getUserInfoActions from 'actions/userInfo.js';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';
import Loading from 'components/Loading';
import Header from 'components/Header';
import LoginComponent from 'components/Login';

class Login extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            checkDidLogin: true
        }
    }    
    render(){     
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checkDidLogin ? <Loading/>:
                    <LoginComponent onLoginCallBack={this.LoginCallBack.bind(this)}/>
                }
            </div>            
        )
    }  
    componentDidMount(){
        // console.log(this.props)
        this.checkLogin();
    }
    checkLogin(){
        let userName = this.props.userInfo.userName;
        if(!userName){
             this.setState({
                checkDidLogin: false
            })
        }else{
            this.props.history.push('/user')
        }
    }
    setUserName(userName){
        //更新redux state
        this.props.getUserInfoActions.getUserInfoSuccess({
            userName: userName
        })
    }
    LoginCallBack(value){
        console.log(value)
        this.setUserName(value.userName);
       
        let router = this.props.match.params.router;
        if(!router){
            console.log('去用户页面');
            // console.log(this.props);
            this.props.history.push('/user')

        }else {
            console.log('去'+router+'页面');
        }
    }

}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
const mapDispatchToProps = (dispatch)=> {
     return {   
         getUserInfoActions: bindActionCreators(getUserInfoActions, dispatch)       
    }
}
export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Login) );