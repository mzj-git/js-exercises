
import React, {Component} from 'react';
import './currentCity.scss';

class CurrentCity extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="current-city">
                <div>{this.props.cityName}</div>
            </div>
        )
    }
}

export default CurrentCity