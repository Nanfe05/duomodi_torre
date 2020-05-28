import React from 'react';

// Material UI
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// Redux
import {connect} from 'react-redux';
import {SwitchSignIn,SignInFormEmail,SignInFormPass,SwitchAlert,AddAlerts} from '../../Redux/actions/app';

// Components 
import {ButtonBasic} from '../../Micro/Buttons/buttons';

const axios = require('axios').default;

const SendSignInForm=async (data,SwitchAlert,AddAlerts)=>{
    try{
        const obj = data;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await axios.post(`/duomodi/signin`,obj,{
            headers:headers
        });
        console.log(response);
        if(response && response.data && response.data.msg){
            SwitchAlert();
            AddAlerts([response.data.msg]);
        }
    }catch(err){
        console.log(err);
    }
}

const SignIn = (props) =>{
    const {app, SwitchSignIn,SignInFormEmail,SignInFormPass,SwitchAlert,AddAlerts} = props;
    return(<Modal
    open={app.signin}
    onClose={SwitchSignIn}
    className='modal'
    >
       <Paper className='form_holder'>
           <h2>Sign In:</h2>
           <form >
                <TextField id="outlined-basic" label="Email" variant="outlined" value={app.signin_form.email} onChange={(e)=>{
                    SignInFormEmail(e.target.value);
                }}/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={app.signin_form.pass} onChange={(e)=>{
                    SignInFormPass(e.target.value);
                }}/>
                <ButtonBasic label={'Sign In'} classes="wide" action={()=>SendSignInForm(app.signin_form,SwitchAlert,AddAlerts)}></ButtonBasic>
           </form>
       </Paper>
    </Modal>);
};


const mapStateToProps = state =>({
    app : state.app
})

export default connect(mapStateToProps,{
    SwitchSignIn,
    SignInFormEmail,
    SignInFormPass,
    SwitchAlert,
    AddAlerts
})(SignIn);