
import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';

import SearchInput from 'components/SearchInput';
import './searchHeader.scss';


class SearchHeader extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            keyword: ""
        }
    }
    render(){
        return (
            <div className="search-header clear-fix">
                <span className="back-icon f-left" onClick={this.handleClickBack.bind(this)} >
                    <i className="fa fa-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="fa fa-search"  onClick={this.handleClickSearch.bind(this)} ></i>
                    <SearchInput className="m_left_5" 
                                    placeholder="请输入关键字" 
                                    onEnter={ this.handleEnter.bind(this) }
                                    onChange={ this.handleChange.bind(this)}/>
                </div>
            </div>        
        )
    }
    componentDidMount(){        
       
        // console.log('history',this.props.history);

    }
    handleClickBack(){
        //  console.log(this.props);
        // this.props.history.goBack();
        this.props.history.push('/')
    }  
    handleClickSearch(){
        this.props.history.push('/search/all/'+this.state.keyword)
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
}
 const SearchHeaderWithRouter = withRouter(SearchHeader);
 export default SearchHeaderWithRouter; 