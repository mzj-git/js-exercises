
import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, hashHistory, browserHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getUserInfoActions from 'actions/userInfo.js';
import Loading from 'components/Loading';
import Header from 'components/Header';
import CurrentCity from 'components/CurrentCity';
import CityList from 'components/CityList';

class City extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        return (
            <div>
               <Header title="选择城市"/>
               <CurrentCity cityName={ this.props.userInfo.cityName }/>
               <CityList changeFn={this.changeCity.bind(this)}/>
            </div>            
        )
    }  
    componentDidMount(){
        console.log('props',this.props)
        // this.props.getUserInfoActions.getUserInfoSuccess({
        //     cityName: cityName
        // })
    }
    changeCity(newCity){
        // console.log(newCity);
        if (newCity == null) {
            return
        }

        //更新redux state
        this.props.getUserInfoActions.getUserInfoSuccess({
            cityName: newCity.name,
            cityCode: newCity.code
        })
        //切换路由
        // console.log(this.props);
        this.props.history.push('/')
    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
const mapDispatchToProps = (dispatch)=> {
     return { 
          getUserInfoActions: bindActionCreators(getUserInfoActions, dispatch)       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City);