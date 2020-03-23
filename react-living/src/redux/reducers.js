//reducers  收集所有的reducer形成树

import counter from 'reducers/counter.js';
import userInfo from 'reducers/userInfo.js';
import userMsg from 'reducers/userMsg.js';

export default function combineReducers(state = {}, action){
    return {
       counter: counter(state.counter, action),
       userInfo: userInfo(state.userInfo, action),
       userMsg: userMsg(state.userMsg, action)
    }
}