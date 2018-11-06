import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Dialogs/create'

export default ({ muscles }) => 
           
<Fragment>
    <AppBar position="static">
        <Toolbar>
            <Typography color="inherit" variant="headline">
                Exercises CRUD
            </Typography>
            <CreateDialog muscles={muscles} />
        </Toolbar>
    </AppBar>
</Fragment>