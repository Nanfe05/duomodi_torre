import React from 'react';

// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// Redux
import {connect} from 'react-redux';
import {SwitchLogIn,LoginFormEmail,LoginFormPass,SwitchAlert,AddAlerts} from '../../Redux/actions/app';

// Components 
import {ButtonBasic} from '../../Micro/Buttons/buttons';

const axios = require('axios').default;

const SendLogInForm=async (data,SwitchAlert,AddAlerts)=>{
    try{
        const obj = data;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await axios.post(`/duomodi/login/`,obj,{
            headers:headers,
            });
        if(response && response.data && response.data.msg){
            SwitchAlert();
            AddAlerts([response.data.msg]);
        }
        console.log('respuesta',response);
    }catch(err){
        console.log('Error ',err);
    }
}


const LogIn = (props) =>{
    const {app, 
        SwitchLogIn,
        LoginFormEmail,
        LoginFormPass,
        SwitchAlert,
        AddAlerts
    } = props;

    return(<Modal
        open={app.login}
        onClose={SwitchLogIn}
        className='modal'
    >
       <Paper className='form_holder'>
           <h2>Log In:</h2>
           <form >
                <TextField id="outlined-basic" label="Email" variant="outlined" value={app.login_form.email} onChange={(e)=>{
                    LoginFormEmail(e.target.value);
                }}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={app.login_form.pass} onChange={(e)=>{
                    LoginFormPass(e.target.value);
                }}/>
                <ButtonBasic label={'Sign In'} classes="wide" action={()=>{
                    SendLogInForm(app.login_form,SwitchAlert,AddAlerts);
                }}></ButtonBasic>
           </form>
       </Paper>
    </Modal>);
};

const mapStateToProps = state =>({
    app : state.app
})

export default connect(mapStateToProps,{
    SwitchLogIn,
    LoginFormEmail,
    LoginFormPass,
    SwitchAlert,
    AddAlerts
})(LogIn);