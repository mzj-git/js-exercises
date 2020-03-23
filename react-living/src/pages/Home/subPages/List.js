import React, {Component} from 'react';
import HomeListComponent from 'components/ListComponent';
import LoadMore from 'components/LoadMore';
import Loading from 'components/Loading';
import httpService from 'httpService/service.js'
import './list.scss'

export default class List extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            page: 0,
            data: [],
            hasMore: false,    // 数据是否还有更多
            isLoadingMore: false,  //是否正在加载状态
        }
    }
    render(){
        return (
            <div className="home-list">
                <h2 className="home-list-title">{this.props.title}</h2>
                {
                    this.state.data.length
                    ? <HomeListComponent data={this.state.data}/>
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
    getListData(){
        this.searchParams = {
            page: this.state.page,            
            cityName: this.props.cityName||''
        }  
        httpService.home.getListData( this.searchParams).then((data)=>{
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
        // console.log('加载更多');
        this.setState({
            isLoadingMore: true,
            page: this.state.page +1
        },()=>{
            this.getListData()
        })
        // httpService.home.getListData({cityName:'shenzhen'}).then((data)=>{
        //     let res = data.result.data;
        //     this.setState({
        //         data: this.state.data.concat(res.data),
        //         hasMore: res.hasMore,
        //         isLoadingMore: false
        //     })
        // },function(err){
        //     this.setState({
        //         isLoadingMore: true
        //     })
        //     console.log(err)
        // })
    }
}