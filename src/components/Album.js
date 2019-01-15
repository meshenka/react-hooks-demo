import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const Album = ({album, callback}) => {
  return (
    <>
      <h2>{album.title}</h2>
      <IconButton 
        size="medium"
        color="primary" aria-label="Go Back to list"
        onClick={e => {callback(null)}}
      >
        <Icon>arrow_back</Icon>
      </IconButton>
  </>
    )
}

export default Album