import React, {useEffect} from 'react';

// Redux
import {connect} from 'react-redux';
import {SearchSkillsChange,SearchSkillsClear,AddSkills,AddMySkill,SearchSkillsClearAll} from '../../Redux/actions/search_skills';
import {AddOpportunities} from '../../Redux/actions/opportunities';
import {ChangeLoading} from '../../Redux/actions/app';
// Material Design
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
//Icons
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
// React Router 
import {useHistory} from 'react-router-dom';
// Components
// Micro
import {ButtonBasic} from '../../Micro/Buttons/buttons';
import {Skill} from '../../Micro/pills/skills/skill';

import { v4 as uuidv4 } from 'uuid';
// axios 
const axios = require('axios');

const  LookForSkills = async  (query,reduxAction,Loading) =>{
    Loading();
    try{
        const skills = await axios.get(`api/strengths`,{params:{
        limit:5,
        q:query,
        context:'add-opportunity',
        locale:'en'
    }});
        if(skills.status === 200){
            Loading();
            reduxAction(skills.data);
        }
    }catch(er){
        Loading();
        console.log('error: ',er);
    }
    
};

const OnSearchOpportunities= async (Loading,mySkylls,AddOpportunities,history,SearchSkillsClearAll)=>{
    Loading();
    try{

        const arr = mySkylls.map(el=>({
            "skill":{
                "term":el,
                "experience":"potential-to-develop"
            }
        }));
        const obj = {
            "and":arr
        };
        const headers = {
            'Content-Type':'application/json',
        }

        const opportunities = await axios.post(`/opportunities/_search/`,obj,{
            headers:headers,
            params:{
                offset:0,
                size:5,
                aggregate:true
            }
        });
        if(opportunities.status === 200){
            
            Loading();
            SearchSkillsClearAll();
            AddOpportunities(opportunities.data);
            history.push('/technicaltests');
        }
        
        
        // Set Opportunities
        // Clear Search Values
        // Go to Opportunities Page
    }catch(er){
        Loading();
        console.log('error: ',er);
    }

};

const OnClickPill = (e,MySkillAction,myskills) =>{
    
    let temp = e.target.innerText;
    
    let mySkills_arr= myskills;
    
    if(!myskills.includes(temp)){

        mySkills_arr.push(temp);
        MySkillAction(mySkills_arr);
        
    }
    
    
}
const OnClickMyPill = (e,MySkillAction,myskills)=>{
    
    let temp = e.target.innerText;

    let mynewskills= myskills.filter((el)=>el !== temp);
    MySkillAction(mynewskills);
}



const SearchOportunity = (props) =>{

    const {
        SearchSkillsChange,
        SearchSkillsClear,
        searchSkills,
        AddSkills,
        AddMySkill,
        ChangeLoading,
        AddOpportunities,
        SearchSkillsClearAll
    }=props;


    let history = useHistory();

    useEffect(()=>{
        if(searchSkills.searchbar !== ''){
            LookForSkills(searchSkills.searchbar,AddSkills,ChangeLoading);
        }
    // eslint-disable-next-line
    },[searchSkills.searchbar,searchSkills.mySkills]);

    const skills = searchSkills.skills.length > 0 ? searchSkills.skills.map((el)=>{
    return <Skill label={el.term} action={(e)=>OnClickPill(e,AddMySkill,searchSkills.mySkills)} key={uuidv4()}/>
    }
    ): '';

    const myskills= searchSkills.mySkills.length > 0 ? searchSkills.mySkills.map((el)=>{
        return <Skill label={el} action={(e)=>OnClickMyPill(e,AddMySkill,searchSkills.mySkills)} key={uuidv4()}/>
        }
        ): '';
    

    return(
        <div className='searchbar_opportunities'>
            <h2>Search your Skills:</h2>
                <Paper  className='search_bar_skill' >
                    <SearchIcon style={{color:"gray",margin:"0 5px"}}/>
                    <InputBase
                    value={searchSkills.searchbar} 
                    onChange={(e)=>{
                        e.preventDefault();
                        SearchSkillsChange(e.target.value);
                    }}/>
                    <Divider orientation='vertical'/>
                    <IconButton onClick={()=>{
                        SearchSkillsClear()
                        }}>
                        <CancelIcon/>
                    </IconButton>
                </Paper>
            <div className='skill_container'>
                <h2>Choose your skills</h2>
                <div className='container'>
                    {skills}
                </div>
            </div>
            <div className='skill_container'>
            <h2>Your skills</h2>
                <div className='container'>
                    {myskills}
                </div>
            </div>
            {searchSkills.mySkills.length>0 &&
                <ButtonBasic label='Search Opportunities' classes='wide' action={()=>OnSearchOpportunities(ChangeLoading,searchSkills.mySkills,AddOpportunities,history,SearchSkillsClearAll)}>
                </ButtonBasic>
            }
        </div>
    );
}

const mapStateToProps = state =>({
    app:state.app,
    searchSkills: state.searchSkills
});


export default connect(mapStateToProps,{
    SearchSkillsChange,
    SearchSkillsClear,
    AddSkills,
    AddMySkill,
    ChangeLoading,
    AddOpportunities,
    SearchSkillsClearAll
})(SearchOportunity);