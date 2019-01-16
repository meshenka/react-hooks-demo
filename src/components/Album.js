import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Album = ({album, callback}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>{album.title}</Typography>

      </CardContent>
      <CardActions>
          <IconButton 
            size="medium"
            color="primary" aria-label="Go Back to list"
            onClick={e => {callback(null)}}
          >
            <Icon>arrow_back</Icon>
          </IconButton>
        </CardActions>
  </Card>
    )
}

export default Album