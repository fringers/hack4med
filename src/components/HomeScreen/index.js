import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fab, Button, TextField } from '@mui/material';

import AppBar from '../AppBar';
import useStyles from './styles';

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <AppBar showNotifications />
      <div className={classes.formWrapper}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        {/* <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button> */}
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
