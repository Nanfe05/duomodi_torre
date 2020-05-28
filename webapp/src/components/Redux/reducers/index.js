import {combineReducers} from 'redux';
import app from './app';
import searchSkills from './search_skills';
import opportunities from './opportunities'


export default combineReducers({app, searchSkills,opportunities});