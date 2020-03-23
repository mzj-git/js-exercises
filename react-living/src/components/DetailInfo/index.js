//商品详情 info
import React, {Component} from 'react';
import Star from 'components/Star';
import './detailInfo.scss'

export default class DetailInfo extends Component {
    constructor(props,context){
        super(props,context);
    }
    render(){
        const data = this.props.data;
        return (
            <div className="detail-info-container">
                <div className="info-container clear-fix">
                    <div className="info-img-container f-left">
                        <img src={'/api/images/detail/'+data.img}/>
                    </div>
                    <div className="info-content">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star num={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                {/* 设置 innerHTML */}
                <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
            </div>
        )
    }
 
}

