import * as actionTypes from '../actionTypes';

const initialState={
    path:'/',
    loading:false,
    signin:false,
    login:false,
    login_form:{
        email:'',
        pass:''
    },
    signin_form:{
        email:'',
        pass:''
    }
};

export default function (state= initialState, action){
    switch(action.type){
        case actionTypes.SIGNIN_FORM_PASS:
            return{
                ...state,
                signin_form:{
                    email: state.signin_form.email,
                    pass:action.payload
                }
            }
        case actionTypes.SIGNIN_FORM_EMAIL:
            return{
                ...state,
                signin_form:{
                    email: action.payload,
                    pass:state.signin_form.pass
                }
            }
        case actionTypes.LOGIN_FORM_PASS:
            return{
                ...state,
                login_form:{
                    email: state.login_form.email,
                    pass:action.payload
                }
            }
        case actionTypes.LOGIN_FORM_EMAIL:
            return{
                ...state,
                login_form:{
                    email: action.payload,
                    pass:state.login_form.pass
                }
            }
        case actionTypes.SWITCH_SIGNIN:
            return{
                ...state,
                signin: !state.signin
            }
        case actionTypes.SWITCH_LOGIN:
            return{
                ...state,
                login: !state.login
            }
        case actionTypes.CHANGE_LOADING:
            return{
                ...state,
                loading: !state.loading
            }
        case actionTypes.CHANGE_APP_PATH:
            return {
                ...state,
                path: action.payload
            }
        default:
            return state;
    }
}