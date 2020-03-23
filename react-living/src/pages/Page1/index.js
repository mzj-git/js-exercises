
import React, {Component} from 'react';
import './page1.scss';
import './page1.css';
import img from './images/seat.png';

import img1 from 'static/images/category/138012-20161022224121920-424129491.png'

export default class Page1 extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        // console.log('page组件挂载了');
        // console.log('process.env',process.env);
        // console.log(this.props)
    }
    render(){
        return (
            <div className="box">
                <div>
                    this is Page1!!---!!!!!
                    <div className="url">url：{this.props.match.url}</div>
                    <div><img src={img} alt=""/></div>
                    <pre style={{overflow: 'scroll',dispaly: 'block'}}>{JSON.stringify(this.props.match)}</pre>
                    <h3>测试css</h3>
                    <img src={img} alt=""/>
                </div>              

                <div>       
                    <h3>计数器---state</h3>
                     <div>
                        <div>当前的计数器值:{this.state.count} </div>
                        <p><button onClick={this.handlerIncrement.bind(this)}>自增</button></p>
                        <p><button onClick={this.handlerDecrement.bind(this)}>自减</button></p>
                        <p><button onClick={this.handlerReset.bind(this)}>重置</button></p>
                    </div>
                </div>
            </div>
            
        )
    }
    componentDidUpdate(){
        console.log('组件更新了');
        console.log('props',this.props)
    }
    handlerIncrement(){
        console.log('自增')       
        this.setState({
             count:this.state.count+1
        })       
    }
    handlerDecrement(){
        this.setState({
             count: this.state.count-1
        })
    }
    handlerReset(){
        console.log('重置')
        this.setState({
             count: 0
        })
    }  
}

