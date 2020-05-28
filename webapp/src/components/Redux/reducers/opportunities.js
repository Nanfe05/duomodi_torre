import * as actionTypes from '../actionTypes';

const initialState={
    opportunities:[]
};

export default function (state= initialState, action){
    switch(action.type){
        case actionTypes.ADD_OPPORTUNITIES:
            return{
                ...state,
                opportunities: action.payload
            }
        default:
            return state;
    }
}