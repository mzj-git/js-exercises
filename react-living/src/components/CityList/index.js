import React, {Component} from 'react';
import cityList from 'constants/city/cityList.js'
import './cityList.scss'

class CityList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
           <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                {cityList.length && cityList.map((item, index)=>{
                    return (
                        <li key={index}>
                            <span onClick={this.clickHandle.bind(this, item)}>{item.name}</span>
                        </li>
                    ) 
                })} 
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
        this.props.changeFn(newCity)
    }
}

export default CityList