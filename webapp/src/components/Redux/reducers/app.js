import * as actionTypes from '../actionTypes';

const initialState={
    path:'/',
    loading:false
};

export default function (state= initialState, action){
    switch(action.type){
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