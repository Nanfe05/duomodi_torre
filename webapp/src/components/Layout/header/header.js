import React, {useEffect} from 'react';

// Redux
import {connect} from 'react-redux';
import {ChangePath} from '../../Redux/actions/app';
// Material UI
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
// React Router 
import {useHistory} from 'react-router-dom';

// Component 
// Micro 
import {ButtonBasic} from '../../Micro/Buttons/buttons';


const Logo = () =>{
    return(
        <img src={'/assets/logo.svg'} alt='duomondi_logo' className='dm_logo'/>
    );    
}

const Header = (props) =>{
    const {ChangePath,app} = props;
    let history = useHistory();

    useEffect(()=>{
        if(app.path !== window.location.pathname){
            ChangePath(window.location.pathname);
        }
        // eslint-disable-next-line
    },[]);

    return(<Grid container>
        <Grid item xs={12 } className='header_holder'>
            <div className='header'>
                <div>
                <Logo/>
                <ul className='navbar'>
                    <li className={app.path === '/' ? 'selected':''} onClick={()=>{
                        history.push('/');
                        ChangePath('/');
                    }}>
                        Home
                    </li>
                    <li className={app.path === '/team' ? 'selected':''} onClick={()=>{
                        history.push('/team');
                        ChangePath('/team');
                    }}>
                        Team
                    </li>
                    <li className={app.path === '/contact' ? 'selected':''} onClick={()=>{
                        history.push('/contact');
                        ChangePath('/contact');
                    }}>
                        Contact
                    </li>
                </ul>
                </div>
                <div>
                <ButtonBasic label='SignIn'/>
                <ButtonBasic label='LogIn'/>
                </div>
            </div>
            <LinearProgress style={{width:'100%'}}/>
        </Grid>
    </Grid>)
}


const mapStateToProps = state =>({
    app: state.app
});


export default connect(mapStateToProps,{
    ChangePath
})(Header);