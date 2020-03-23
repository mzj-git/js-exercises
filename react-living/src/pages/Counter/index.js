//计数器页面
import React, { Component } from 'react';
import {increment, decrement, reset} from 'actions/counter.js';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>            
                <div>
                    <div>当前的计数器值:{this.props.counter.count} </div>
                    <p><button onClick={this.props.increment}>自增</button></p>
                    <p><button onClick={this.props.decrement}>自减</button></p>
                    <p><button onClick={this.props.reset}>重置</button></p>
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        counter: state.counter 
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        increment: ()=>{
             console.log('自增');
            dispatch(increment())
        },
        decrement: ()=>{
            console.log('自减');
            dispatch(decrement())
        },
        reset: ()=>{
            console.log('重置')
            dispatch(reset())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);