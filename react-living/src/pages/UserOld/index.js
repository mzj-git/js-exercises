//计数器页面
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as getUserMsg from 'actions/userMsg.js';
import httpService from 'httpService/service.js'

class User extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log('user组件挂载了');
        console.log('process.env',process.env);
        console.log(this.props)
    }    
    render(){
        const {isLoading, userMsg, errorMsg} = this.props.userMsg;
        return (
            <div>
                {
                    isLoading? '正在加载中....' : (
                          errorMsg? errorMsg: (
                                <div>
                                    <div>用户: {userMsg.name} </div>
                                    <div>介绍: {userMsg.intro}  </div>                    
                                </div> 
                          ) 
                    )
                }
                <button onClick={this.actions.bind(this)}>获取用户信息</button>
                <div style={{marginTop: '20px'}}>
                    <button onClick={this.handleGet.bind(this)}> fetch-get请求</button>
                    <p>
                        <span>结果:</span>
                    </p>
                </div>
                <div style={{marginTop: '20px'}}>
                    <button onClick={this.handlePost.bind(this)}> fetch-post请求</button>
                    <p>
                        <span>结果:</span>
                    </p>
                </div>
            </div>
        )
    }
    actions(){
        console.log(this.props.getUserMsg)
        this.props.getUserMsg.getUserMsgSuccess({
            "name": "harry",
            "intro": "please give me a star"
        })       
    }
    handleGet(){
        console.log('get请求')
        let data = {
            name: 'jack',
            age: [20,30],
            bad: false
        }
        httpService.demo.getData(data).then(function(data){
            console.log('成功',data)
        },function(err){
             console.log('失败',err)
        })
        // console.log()
    }
    handlePost(){
        console.log('post请求');
        let data = {
            name: 'jack',
            age: {
                hha: 20
            }
        }
        httpService.demo.postData(data).then(function(data){
            console.log('成功',data)
        },function(err){
             console.log('失败',err)
        })
    }

}

const mapStateToProps = (state)=>{
    return {
        userMsg: state.userMsg 
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        getUserMsg: bindActionCreators(getUserMsg, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);