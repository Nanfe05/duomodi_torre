import * as actionTypes from '../actionTypes';

const initialState={
    searchbar:'',
    skills:[],
    mySkills:[]
};

export default function (state= initialState, action){
    switch(action.type){
        case actionTypes.SEARCH_SKILLS_CLEAR_ALL:
            return{
                searchbar:'',
                skills:[],
                mySkills:[]
            }
        case actionTypes.MYSKILL_ADD:
            return {
                ...state,
                mySkills:action.payload
            }
        case actionTypes.SKILLS_ADD:
            return{
                ...state,
                skills:action.payload
            }
        case actionTypes.SEARCH_SKILLS_CHANGE:
            return{
                ...state,
                searchbar:action.payload
            }
        case actionTypes.SEARCH_SKILLS_CLEAR:
            return{
                ...state,
                searchbar:'',
                skills:[]
            }
        default:
            return state;
    }
}