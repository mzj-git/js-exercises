//action 

export const GET_USER_MSG_REQUEST = "userMsg/GET_USER_MSG_REQUEST";
export const GET_USER_MSG_SUCCESS = "userMsg/GET_USER_MSG_SUCCESS";
export const GET_USER_MSG_FAIL = "userMsg/GET_USER_MSG_FAIL";

export function getUserMsgRequest() {
    return {
        type: GET_USER_MSG_REQUEST
    }
}
export function getUserMsgSuccess(userMsg) {
    return {
        type: GET_USER_MSG_SUCCESS,
        userMsg: userMsg
    }
}
export function getUserMsgFail() {
    return {
        type: GET_USER_MSG_FAIL
    }
}