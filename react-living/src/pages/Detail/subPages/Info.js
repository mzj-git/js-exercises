// 商品详情 
import React, {Component} from 'react';
import Loading from 'components/Loading';
import DetailInfo from 'components/DetailInfo';
import httpService from 'httpService/service.js'
import './info.scss'

export default class Info extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {            
            info: null
        }  
    }
    render(){
         return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info} />
                    : <Loading />
                }
            </div>
        )
    }
    componentDidMount(){
        this.getInfo()
    }
    getInfo(){
        const id = this.props.id;
        let params = {
        }
        httpService.detail.getInfoData(id,params).then((data)=>{
            console.log(data);
            this.setState({
                info: data.result.data
            })
        },(err)=>{
            console.log(err)
        })
    }
}



