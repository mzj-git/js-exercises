
import React, {Component} from 'react';

export default class SearchInput extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            value: ''
        }
    }
    render(){
        return  <input type="text"
                        className={this.props.className}
                        placeholder={this.props.placeholder} 
                        value={this.state.value||''} 
                        onChange={this.handleChange.bind(this)}
                        onKeyUp={this.handleKeyUp.bind(this)}  />       
    }
    componentDidMount(){
        // console.log('searchInput',this.props)
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
        this.props.onChange(this.state.value);
    }
    handleKeyUp(e){
        if(e.keyCode !==13){
            return 
        }
        this.props.onEnter(this.state.value);
    }
}