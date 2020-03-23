import React, {Component} from 'react';
import Item from './Item';
import './orderListComponent.scss';

export default class OrderListComponent extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        console.log(this.props.data)
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {                   
                    return <Item key={index} data={item}/>
                })}
            </div>           
        )
    }
 
}

