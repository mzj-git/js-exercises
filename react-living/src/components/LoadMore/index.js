import React, {Component} from 'react';
import './loadMore.scss'

export default class LoadMore extends Component {
    constructor(props, context) {
        super(props, context);
    }    
    render() {
        return (
            <div className="load-more" ref={(wrapper)=>{this.wrapper = wrapper}}>
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount(){
        let wrapper = this.wrapper;
        
        let isLoadingMore =  this.props.isLoadingMore;
        
        let timeoutId;
        function handleScroll(){
            if(isLoadingMore){
                return 
            }
            if(timeoutId){
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callBack.bind(this), 100);
        }
        function callBack(){
            const toTopDistance = wrapper.getBoundingClientRect().top;            
            const windowHeight = window.screen.height;
            const startDistance = windowHeight + parseInt(this.props.toBottom);
            // console.log('start',startDistance)
            if (toTopDistance && toTopDistance < startDistance) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
               this.loadMoreHandle()
            }
        }
        window.addEventListener('scroll',handleScroll.bind(this));
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.loadMoreFn();
    }
}

LoadMore.defaultProps = {
    toBottom:　0
}