import React, {useEffect} from 'react';

// Redux
import {connect} from 'react-redux';
import {SearchSkillsChange,SearchSkillsClear,AddSkills,AddMySkill} from '../../Redux/actions/search_skills';
// Material Design
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
//Icons
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

// Components
// Micro
import {ButtonBasic} from '../../Micro/Buttons/buttons';
import {Skill} from '../../Micro/pills/skills/skill';

import { v4 as uuidv4 } from 'uuid';
// axios 
const axios = require('axios');

const  LookForSkills = async  (query,reduxAction) =>{
    try{
        const skills = await axios.get(`api/strengths`,{params:{
        limit:5,
        q:query,
        context:'add-opportunity',
        locale:'en'
    }});
    //     const skills = await axios.get(`api/opportunities/Odvgzbrj`);
        if(skills.status === 200){
            reduxAction(skills.data);
        }
    }catch(er){
        console.log('errrorr: ',er);
    }
    
};

const OnSearchOpportunities=()=>{

    console.log('looking for opportunities');

};

const OnClickPill = (e,SkillAction,MySkillAction,skills,myskills) =>{
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
        /*app,*/
        searchSkills,
        AddSkills,
        AddMySkill
    }=props;




    useEffect(()=>{
        if(searchSkills.searchbar !== ''){
            LookForSkills(searchSkills.searchbar,AddSkills);
        }
    // eslint-disable-next-line
    },[searchSkills.searchbar,searchSkills.mySkills]);

    const skills = searchSkills.skills.length > 0 ? searchSkills.skills.map((el)=>{
    return <Skill label={el.term} action={(e)=>OnClickPill(e,AddSkills,AddMySkill,searchSkills.skills,searchSkills.mySkills)} key={uuidv4()}/>
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
        <ButtonBasic label='Search Opportunities' classes='wide' action={OnSearchOpportunities}>
        </ButtonBasic>
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
    AddMySkill
})(SearchOportunity);