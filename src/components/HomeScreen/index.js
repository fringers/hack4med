import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, Button, TextField } from '@mui/material';
import { Typography } from '@mui/material';

import AppBar from '../AppBar';
import useStyles from './styles';
import { fontWeight } from '@mui/system';

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">Dodaj osobę</Typography>
      </div>
      <div className={classes.formWrapper}>
        <Typography fontWeight="bold" color="primary">
          Variable 1
        </Typography>
        <TextField placeholder="Variable 1" sx={{ mb: 2 }} variant="outlined" />
        <Typography fontWeight="bold" color="primary">
          Variable 2
        </Typography>
        <TextField placeholder="Variable 2" sx={{ mb: 2 }} variant="outlined" />
        <Typography fontWeight="bold" color="primary">
          Variable 3
        </Typography>
        <TextField placeholder="Variable 3" sx={{ mb: 2 }} variant="outlined" />
        <Typography fontWeight="bold" color="primary">
          Variable 4
        </Typography>
        <TextField placeholder="Variable 4" sx={{ mb: 2 }} variant="outlined" />
        <Typography fontWeight="bold" color="primary">
          Variable 5
        </Typography>
        <TextField placeholder="Variable 5" sx={{ mb: 2 }} variant="outlined" />
      </div>
      <div className={classes.wrapper}>
        <Fab
          classes={{ root: classes.button }}
          variant="extended"
          onClick={() => history.push('/submit')}
          color="secondary"
          aria-label="add"
        >
          Sprawdź
        </Fab>
      </div>
    </div>
  );
};

export default HomeScreen;
