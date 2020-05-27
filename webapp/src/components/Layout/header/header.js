import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';


const Logo = () =>{
    return(
        <img src={'/assets/logo.svg'} alt='duomondi_logo'/>
    );    
}

const Header = () =>{
    return(<Grid container>
        <Grid xs={12 } className='header'>
            <Logo/>

            
        </Grid>
    </Grid>)
}


export default Header;