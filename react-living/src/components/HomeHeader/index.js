
import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

import SearchInput from 'components/SearchInput';
import './homeHeader.scss';


class HomeHeader extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            keyword: ""
        }
    }
    render(){
        return (
            <div id="home-header" className="home-header">
               <div className="home-header-left f-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="fa fa-angle-down m_left_5"></i>
                    </Link>
               </div>
               <div className="home-header-right f-right">
                    <Link to="/login">
                        <i className="fa fa-user"></i>
                    </Link>
               </div>
               <div className="home-header-middle">
                    <div className="search-container">
                        <i className="fa fa-search m_left_5" onClick={ this.handleClickSearch.bind(this) }></i>
                        <SearchInput className="m_left_5" 
                                    placeholder="请输入关键字" 
                                    onEnter={ this.handleEnter.bind(this) }
                                    onChange={ this.handleChange.bind(this) }/>
                    </div>
               </div>
            </div>          
        )
    }
    componentDidMount(){        
       
        // console.log('history',this.props.history);

    }
    handleChange(value){
        this.setState({
            keyword: value
        })
        // console.log(this.state)
    }
    handleEnter(value){
        // console.log('enter',value);
        this.setState({
            keyword: value
        },()=>{
            console.log('enter',value);
            this.props.history.push('/search/all/'+this.state.keyword)
        })        
    }
    handleClickSearch(){
        // console.log(this.state)
        this.props.history.push('/search/all/'+this.state.keyword)
    }
}
 const HomeHeaderWithRouter = withRouter(HomeHeader);
 export default HomeHeaderWithRouter; 