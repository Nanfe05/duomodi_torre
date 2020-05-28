import React from 'react';

// Material UI
import Modal from '@material-ui/core/Modal';


// Redux
import {connect} from 'react-redux';
import{SwitchAlert,AddAlerts} from '../../Redux/actions/app';


const Alerts = (props) =>{
    const {app, 
        SwitchAlert,AddAlerts
    } = props;

const elements = <div className='error' >{app.alerts[0]}</div >

    return(<Modal
        open={app.alert}
        onClose={()=>{
            SwitchAlert();
            // Clear Alerts
            AddAlerts([]);
        }}
        className='modal'
    >
       {elements}
    </Modal>);
};

const mapStateToProps = state =>({
    app : state.app
})

export default connect(mapStateToProps,{
    SwitchAlert,
    AddAlerts
})(Alerts);