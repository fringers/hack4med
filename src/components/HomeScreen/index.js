import React from 'react';
import { useHistory } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import AppBar from '../AppBar';
import useStyles from './styles';

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <AppBar showNotifications />
      <div className={classes.wrapper}>
        <Fab
          classes={{ root: classes.button }}
          variant="extended"
          onClick={() => history.push('/submit')}
        >
          Zgłoś
        </Fab>
      </div>
    </div>
  );
};

export default HomeScreen;
