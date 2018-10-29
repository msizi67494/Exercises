import React from 'react';
import { Paper } from '@material-ui/core';

const styles = {
    Paper: {marginTop: 10, marginBottom: 10, marginLeft: 10,marginRight: 10, padding: 20},
   
}

export default props => 
    <Paper style={styles.Paper} className="classses-root">
        Right Pane
     </Paper>