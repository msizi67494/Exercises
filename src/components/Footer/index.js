import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';

export default ({muscles}) => 
     
  <Paper className="classes-root">
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
    {/* we use the map function to destructure data structures like objects, arrays etc */}
      {muscles.map(group =>
        <Tab label={group} />
      )}
    </Tabs>
</Paper>
  

