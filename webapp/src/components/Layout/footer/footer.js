import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';


const Footer = () =>{
    return(<Grid container>
        <Grid item xs={12} className='footer'>
            
                 © &nbsp;<span className='app_name'>Duo Mondi</span> &nbsp;2020
            
        </Grid>
    </Grid>);
}

export default Footer;