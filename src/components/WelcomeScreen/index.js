import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Zoom, Button } from '@mui/material';

import useStyles from './styles';

const WelcomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  // useEffect(() => {
  //   setTimeout(() => history.push('/home'), 1500);
  // }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Zoom
          in={true}
          style={{ transitionDelay: 500, transitionDuration: 2000 }}
        >
          <img className={classes.img} src="/app_logo.png" />
        </Zoom>
      </div>
      <div className={classes.text}>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: 'bold' }}
          color="primary"
        >
          APP_NAME_HERE
        </Typography>
        <Typography color="primary">subtitle</Typography>
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={() => history.push('/home')}
      >
        Open App
      </Button>
    </div>
  );
};

export default WelcomeScreen;
