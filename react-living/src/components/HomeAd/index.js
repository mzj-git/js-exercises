import React, {Component} from 'react';
import './homeAd.scss'

export default class HomeAd extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        return (
            <div className="home-ad">
                <h2>{this.props.title}</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item f-left">
                                    <a href={item.link} target="_blank">
                                        <img src={'/api/images/homeAd/'+item.img} alt={item.title}/>
                                    </a>
                                </div>
                    })}
                </div>
            </div>                    
        )
    }
 
}