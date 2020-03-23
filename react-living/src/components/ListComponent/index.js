import React, {Component} from 'react';
import Item from './Item';
import './homeListComponent.scss';

export default class HomeListComponent extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>           
        )
    }
 
}