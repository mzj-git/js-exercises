//reducer 

import {GET_USER_MSG_REQUEST, GET_USER_MSG_SUCCESS, GET_USER_MSG_FAIL} from 'actions/userMsg.js';

let initState = {
    isLoading: false,
    userMsg: {},
    errorMsg: ''
}
export default function reducer(state=initState, action){
    switch(action.type){
        case GET_USER_MSG_REQUEST:
            return Object.assign({},state, {
                        isLoading: true,
                        userMsg: {},
                        errorMsg: ''
                    });
        case GET_USER_MSG_SUCCESS:
            return Object.assign({},state, {
                        isLoading: true,
                        userMsg: action.userMsg,
                        errorMsg: ''
                    }); 
        case GET_USER_MSG_FAIL:
            return Object.assign({},state, {
                        isLoading: true,
                        userMsg: {},
                        errorMsg: ''
                    });
        default: 
            return state
    }
}