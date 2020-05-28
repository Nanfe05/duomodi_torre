import * as actionTypes from '../actionTypes';


export const ChangePath= (payload) =>({
    type:actionTypes.CHANGE_APP_PATH,
    payload:payload
})

export const ChangeLoading = () =>({
    type: actionTypes.CHANGE_LOADING
})

export const SwitchSignIn= () =>({
    type: actionTypes.SWITCH_SIGNIN
})

export const SwitchLogIn= () =>({
    type: actionTypes.SWITCH_LOGIN
})

export const LoginFormEmail = (payload)=>({
    type:actionTypes.LOGIN_FORM_EMAIL,
    payload:payload
});
export const LoginFormPass = (payload)=>({
    type:actionTypes.LOGIN_FORM_PASS,
    payload:payload
});

export const SignInFormEmail = (payload)=>({
    type:actionTypes.SIGNIN_FORM_EMAIL,
    payload:payload
});
export const SignInFormPass = (payload)=>({
    type:actionTypes.SIGNIN_FORM_PASS,
    payload:payload
});

export const SwitchAlert = () =>({
    type: actionTypes.SWITCH_ALERTS
})

export const AddAlerts = (payload) =>({
    type: actionTypes.ADD_ALERTS,
    payload:payload
})