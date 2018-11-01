import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';

export default ({muscles, onSelect, category}) => {

  const index = category ? muscles.findIndex(group  => group === category) + 1 : 0

  const onIndexSelected = (e, index) => onSelect(index === 0 ? '' : muscles[index - 1])
     
  return <Paper>
            <Tabs
              value={index}
              onChange={onIndexSelected}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
            {/* we use the map function to destructure data structures like objects, arrays etc */}
                <Tab label="All" />
                {muscles.map(group =>
                <Tab label={group} />
              )}
            </Tabs>
          </Paper>
  
}
