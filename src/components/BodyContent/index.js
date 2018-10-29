import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
    Paper: {marginTop: 10, marginBottom: 10, marginLeft: 10,marginRight: 10, padding: 20},
    Grid: {marginTop: 60, marginRight: 10}
}

export default props => 
    //function will reside below

    <Fragment>
        <Grid container style={styles.Grid} >

            <Grid item  xs={6}>
                <LeftPane/>
            </Grid>

            <Grid item xs={6}>
                <RightPane/>
            </Grid>
        
        </Grid>
    </Fragment>
       
    
    




