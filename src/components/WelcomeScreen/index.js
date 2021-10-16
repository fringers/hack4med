import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';

import useStyles from './styles';

const WelcomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/home'), 1500);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.img} src="/app_logo.png" />
      </div>
      <div className={classes.title}>
        <Typography>APP_NAME_HERE</Typography>
      </div>
    </div>
  );
};

export default WelcomeScreen;
