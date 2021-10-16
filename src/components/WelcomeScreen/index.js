import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Zoom } from '@mui/material';

import useStyles from './styles';

const WelcomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push('/home'), 3200);
  }, []);

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
          Kalkulator ryzyka
        </Typography>
        <Typography color="primary">COVID-19</Typography>
      </div>
    </div>
  );
};

export default WelcomeScreen;
