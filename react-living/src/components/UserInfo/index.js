import React, {Component} from 'react';

import './userInfo.scss'

export default class UserInfo extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="fa fa-user"></i>
                    &nbsp;
                    <span>{this.props.userName}</span>
                </p>
                <p>
                    <i className="fa fa-map-marker"></i>
                    &nbsp;
                    <span>{this.props.cityName}</span>
                </p>
            </div>
        )
    }
}