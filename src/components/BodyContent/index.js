import React, { Fragment} from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemText} from '@material-ui/core';


const styles = {
    Paper: {marginTop: 10, marginBottom: 10, marginLeft: 10,marginRight: 10, padding: 20},
    Grid: {marginTop: 60, marginRight: 10}
}

export default ({exercises}) => 
    //function will reside below

    <Fragment>
        <Grid container style={styles.Grid} >

            <Grid item  xs={6}>
                <Paper style={styles.Paper} className="classses-root">
                   
                    {exercises.map(([group, exercises])=>
                    <Fragment>
                        <Typography variant="headline" style={{textTransform: "capitalize"}}>
                            {group}
                        </Typography>
                        <List component="ul">
                        {exercises.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                                )}
                            </List>
                    </Fragment>
                    )}
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper style={styles.Paper} className="classses-root">
                    Right Pane
                </Paper>
            </Grid>
        
        </Grid>
    </Fragment>
       
    
    




