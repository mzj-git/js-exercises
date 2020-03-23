//计数器页面

import store from '../../redux/store.js';
import {increment, decrement, reset} from '../../redux/actions/counter.js';

// console.log('查询状态', store.getState());

//监听state 返回的函数可以解绑监听
let unsubscribe = store.subscribe(()=>{
    console.log('state', store.getState())
})
//增加
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(reset());

//注销监听
// unsubscribe();


import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: store.getState().counter
        }
        this.handlerIncrement = this.handlerIncrement.bind(this);
        this.handlerDecrement = this.handlerDecrement.bind(this);
        this.handlerReset = this.handlerReset.bind(this);
    }
    handlerIncrement(){
        console.log('自增')
        store.dispatch(increment());
        this.setState({
             counter: store.getState().counter
        })       
    }
    handlerDecrement(){
        console.log('自减')
        store.dispatch(decrement());
        this.setState({
             counter: store.getState().counter
        })
    }
    handlerReset(){
        console.log('重置')
        store.dispatch(reset());
        this.setState({
             counter: store.getState().counter
        })
    }  
    render(){
        return (
            <div>
               <div>
                    <div>当前的计数器值:{this.state.counter.count} </div>
                    <p><button onClick={this.handlerIncrement}>自增</button></p>
                    <p><button onClick={this.handlerDecrement}>自减</button></p>
                    <p><button onClick={this.handlerReset}>重置</button></p>
                </div>
            </div>
        )
    }
}
