
import React, {Component} from 'react';
import './login.scss'

export default class Login extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            userName: ''
        }
    }
    render(){
        return (
           <div className="login-container">
                <div className="input-container phone-container">
                    <i className="fa fa-tablet"></i>
                    <input 
                        type="text" 
                        placeholder="输入手机号" 
                        onChange={this.handleChangeUserName.bind(this)} 
                        value={this.state.userName}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="fa fa-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.handleClickConfirm.bind(this)}>登录</button>
            </div>
        )   
    }
    componentDidMount(){
    }
    handleChangeUserName(e){
        this.setState({
            userName: e.target.value
        })
    }
    handleClickConfirm(){
        let user = {
            userName: this.state.userName
        }
        this.props.onLoginCallBack(user);
    }
}