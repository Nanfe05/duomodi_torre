import React from 'react';
// React Redux
import { connect } from 'react-redux';
import app from '../../Redux/reducers/app';
// React Router 
import {useHistory} from 'react-router-dom';

// Components
// Micro 
import {ButtonBasic} from '../../Micro/Buttons/buttons';

const Opportunities = (props) =>{

    const {opportunities} = props.opportunities;
    let history = useHistory();
    console.log(opportunities);
    console.log(opportunities.results);

    const opps = opportunities && opportunities.results ? opportunities.results.map(el=>{
        return(<div className='opportunity_holder'>
            <h2>{el.objective}</h2>
            <h3>{el.type}</h3>
        </div>)
    }):'Go back and search again';

    return(<div className='opportunities_holder'>
        <div className='goBack'>
            <ButtonBasic label='Go Back' action={()=>{
                history.push('/');
            }}/>
        </div>
        <h2>Companies with Technical Tests: </h2>
        <div className='opportunities_list'>
            {opps}
        </div>
    </div>
    );
}

const mapStateToProps = state =>({
 opportunities: state.opportunities
});

export default connect(mapStateToProps)(Opportunities); 