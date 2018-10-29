import React from 'react';
import { Paper } from '@material-ui/core';

const styles = {
    Paper: {marginTop: 10, marginBottom: 10, marginLeft: 10,marginRight: 10, padding: 20},
    Grid: {marginTop: 60, marginRight: 10}
}

export default props => 
    <Paper style={styles.Paper} className="classses-root">
        Left Pane
     </Paper>