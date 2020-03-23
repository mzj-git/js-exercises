
//reducer  更改状态，通过action 返回某个状态
import {INCREMENT, DECREMENT, RESET} from 'actions/counter.js';

//初始化状态
const initState = {
    count: 0
}

export default function reducer(state = initState, action){
    switch(action.type){
        case INCREMENT: 
            return {
                count: state.count +1
            };
        case DECREMENT:
            return {
                count: state.count -1
            };
        case RESET: 
            return {
                count: initState.count
            };
        default:
            return state
    }
}