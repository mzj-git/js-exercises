
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BrowserRouter , HashRouter as Router, Route, Switch, Link,withRouter} from 'react-router-dom';
import Loading from 'components/Loading';
import SearchHeader from  'components/SearchHeader'
import List from './subPages/list'

class Search extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        return (
            <div>
                <SearchHeader/>
                 <List  cityName={ this.props.userInfo.cityName } 
                        keyword={this.props.match.params.keyword}
                        category={this.props.match.params.category}/>
            
            </div>            
        )
    }  
    componentDidMount(){
      console.log(this.props)
    }
}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo 
    }
}
const mapDispatchToProps = (dispatch)=> {
     return {        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);