import React, {Component} from 'react';
import Item from './Item';
import './commentListComponent.scss';

export default class CommentListComponent extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="comment-list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>           
        )
    }
 
}