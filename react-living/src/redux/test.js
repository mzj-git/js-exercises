//测试 redux counter计数器案例

import store from './store.js';
import {increment, decrement, reset} from './actions/counter.js';

console.log('查询状态', store.getState());

//监听state 返回的函数可以解绑监听
let unsubscribe = store.subscribe(()=>{
    console.log('state', store.getState())
})
//增加
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

//注销监听
unsubscribe();