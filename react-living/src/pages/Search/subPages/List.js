import React, {Component} from 'react';
import SearchListComponent from 'components/ListComponent';
import LoadMore from 'components/LoadMore';
import Loading from 'components/Loading';
import httpService from 'httpService/service.js'
import './list.scss'

export default class List extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {            
            page:0,
            data: [],
            hasMore: false,    // 数据是否还有更多
            isLoadingMore: false,  //是否正在加载状态
        }  
    }
    render(){
        return (
            <div className="home-list">
                {
                    this.state.data.length
                    ? <SearchListComponent data={this.state.data}/>
                    : <Loading/>
                } 
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMore.bind(this)} toBottom="100" />
                    :<div></div>
                }               
            </div>
        )
    }
    componentDidMount(){
        this.loadFirstList();
    }
    componentDidUpdate(prevProps, prevState){        
        // this.getListData();
        const keyword = this.props.keyword
        const category = this.props.category
        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            console.log('不需更新');
            return
        }
        // console.log('更新');
        this.loadFirstList()
    }
    getListData(){
        this.searchParams = {
            page: this.state.page,
            category: this.props.category||'',
            keyword: this.props.keyword||'',
            cityName: this.props.cityName||''
        }  
        httpService.home.getListData(this.searchParams).then((data)=>{
            let res = data.result.data;
            this.setState({
                data: this.state.data.concat(res.data),
                hasMore: res.hasMore,
                isLoadingMore: false
            })
        },function(err){
            console.log(err)
        })
    }
    loadFirstList(){
        this.getListData();
    }
    loadMore(){
        // console.log('加载更多',this.state);
        this.setState({
            isLoadingMore: true,
            page: this.state.page + 1
        },()=>{
            this.getListData();
        })
        
    }
}