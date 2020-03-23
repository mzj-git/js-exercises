import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link,withRouter} from 'react-router-dom';
import './item.scss';

export default class Item extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        let data = this.props.data;
        return (
            <Link to={'/detail/'+data.mumber}>
                <div className="list-item clear-fix">
                    <div className="item-img-container f-left">
                        <img src={'/api/images/homeList/'+data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="f-left">{data.title}</h3>
                            <span className="f-right">{data.distance}</span>
                        </div>
                        <p className="item-sub-title">
                            {data.subTitle}
                        </p>
                        <div className="item-price-container clear-fix">
                            <span className="price f-left">￥{data.price}</span>
                            <span className="mumber f-right">已售{data.mumber}</span>
                        </div>
                    </div>
                </div>    
            </Link>     
        )
    }
 
}