import * as actionTypes from '../actionTypes';


export const ChangePath= (payload) =>({
    type:actionTypes.CHANGE_APP_PATH,
    payload:payload
})

export const ChangeLoading = () =>({
    type: actionTypes.CHANGE_LOADING
})