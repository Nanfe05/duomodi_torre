import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

export const ButtonBasic = (props) =>{
    const {label} = props;
    return(
        <Button className='dm_basic'>
            {label}
        </Button>
    );
} 