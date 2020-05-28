import React from 'react';

// Material UI
import Button from '@material-ui/core/Button';

export const ButtonBasic = (props) =>{
    const {label,classes,action} = props;
    return(
        <Button className={`dm_basic ${classes}`} onClick={action}>
            {label}
        </Button>
    );
} 