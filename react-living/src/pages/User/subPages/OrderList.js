import React, {Component} from 'react';
import OrderListComponent from 'components/OrderListComponent';
import Loading from 'components/Loading';
import httpService from 'httpService/service.js'

export default class OrderList extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            data: []
        }       
    }
    render(){
        return (
            <div className="order-list">
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data}/>
                    : <Loading/>
                }                        
            </div>
        )
    }
    componentDidMount(){
        this.getOrderListData();
    }    
    getOrderListData(){
        this.searchParams = {
            userName: this.props.userName,           
        }  
        httpService.user.getOrderListData(this.searchParams).then((data)=>{
            let res = data.result;
            this.setState({
                data: res.data,
                
            })
        },function(err){
            console.log(err)
        })
    }
    
}