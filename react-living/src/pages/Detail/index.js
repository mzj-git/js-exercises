
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {BrowserRouter , HashRouter as Router, Route, Switch, Link,withRouter} from 'react-router-dom';
import Loading from 'components/Loading';
import Header from 'components/Header';
import Info from './subPages/Info';
import Comment from './subPages/Comment';

class Detail extends Component {
    constructor(props,context){
        super(props,context);
    }    
    render(){
        const goodsId = this.props.match.params.goodsId;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={goodsId}/>
                <Comment id={goodsId} title="用户评论"/>
            </div>            
        )
    }  
    componentDidMount(){
    //   console.log(this.props)
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail);