import * as actionTypes from '../actionTypes';

export const SearchSkillsChange=(payload)=>({
    type:actionTypes.SEARCH_SKILLS_CHANGE,
    payload:payload
});

export const SearchSkillsClear = () =>({
    type:actionTypes.SEARCH_SKILLS_CLEAR
})

export const AddSkills = (payload) =>({
    type: actionTypes.SKILLS_ADD,
    payload:payload
});

export const AddMySkill = (payload) =>({
    type:actionTypes.MYSKILL_ADD,
    payload:payload
});

export const SearchSkillsClearAll = () =>({
    type:actionTypes.SEARCH_SKILLS_CLEAR_ALL
});