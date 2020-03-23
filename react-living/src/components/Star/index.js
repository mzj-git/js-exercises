
import React, {Component} from 'react';
import './star.scss'

export default class Star extends Component {
    constructor(props, context){
        super(props, context);
    }
    render(){
        let num = this.props.num || 0;
        num = num%5;
        return (
           <div className="star-container">
               {[1,2,3,4,5].map((item,index)=>{
                   const lightClass = num >= item ? ' light' : ''
                   return <i key={index} className={'fa fa-star' + lightClass}></i>                   
               })}
           </div> 
        )   
    }
    componentDidMount(){
    }
}