//reducer 

import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from 'actions/userInfo.js';

let initState = {
}
export default function reducer(state=initState, action){

    switch(action.type){
        case GET_USER_INFO_REQUEST:
            return Object.assign({},state);

        case GET_USER_INFO_SUCCESS:
            return Object.assign({},state, action.data);

        case GET_USER_INFO_FAIL:
            return Object.assign({},state);
        default: 
            return state
    }
}