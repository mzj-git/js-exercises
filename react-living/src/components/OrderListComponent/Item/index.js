import React, {Component} from 'react';
import './item.scss';

export default class OrderListComponent extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img f-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment f-right">
                    <button>评价</button>
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
            </div>
        )
    } 
}



