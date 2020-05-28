import React from 'react';


export const Skill = (props) =>{
    return <div className={'skill_pill'} onClick={props.action}>
        {props.label}
    </div>
}
