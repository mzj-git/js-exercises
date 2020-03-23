import React, {Component} from 'react';
import {BrowserRouter , HashRouter as Router, Route, Switch, Link,withRouter} from 'react-router-dom';
import ReactSwipe from 'react-swipe';
import './category.scss';

// import img1 from 'static/images/category/138012-20161022224121920-424129491.png'

import categoryList from 'constants/category/categoryList.js';

export default class Category extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            index: 0
        }
    }
    render(){
        let options = {
            startSlide: 0,
            speed: 400,
            auto: 4000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: (index, elem)=> {
                // console.log(index);
                this.setState({
                    index: index
                })
            },
            transitionEnd: function(index, elem) {}
        }
        return (
            <div className="carousel">
                <ReactSwipe ref={(reactSwipe)=>{ this.reactSwipe = reactSwipe}} className="carousel-box" swipeOptions={options} >

                    { categoryList.length >0 && categoryList.map((item, index)=>{
                        return  <ul className="carousel-container clear-fix" key={'box_'+index}>                                    
                                    { item.map((one, num)=>{                                        
                                    return  <Link to={'/search/'+one.code} key={one.code}>
                                                <li className="carousel-one f-left" style={{backgroundImage: 'url(/api/images/category/'+one.img_url+')'}}>
                                                    {one.name}
                                                </li>                                            
                                            </Link>
                                            
                                    }) }                                   
                                </ul>
                    }) }
                </ReactSwipe> 
                <div className="dot-box">
                    {
                        categoryList.length >0 && categoryList.map((item, index)=>{
                            return <div className={this.state.index === index ? 'selected dot' : 'dot'} 
                                        onClick={this.handleSlide.bind(this,index,1000)}
                                        key = {index}
                                    ></div>
                        })
                    }
                </div>
            </div>     
                    
        )
    }
    componentDidMount(){
        // console.log('Category组件挂载');
        // console.log(this.reactSwipe)
    }
    handleSlide(index, duration){
       this.reactSwipe.swipe.slide(index,duration)
    }
}