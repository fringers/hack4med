import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

import useStyles from './styles';

const OK = () => (
  <>
    <img src="ok2.png" width="90%" style={{ margin: 4, marginRight: 12 }} />
    <Typography sx={{ mt: 6 }} gutterBottom variant="h4">
      Wszystko ok
    </Typography>
    <Typography color="primary">Pacjent nie jest w grupie ryzyka</Typography>
  </>
);

const WARNING = () => (
  <>
    <img src="warning1.png" width="100%" style={{ marginRight: 8 }} />
    <Typography sx={{ mt: 6 }} gutterBottom variant="h4">
      Istnieje ryzyko
    </Typography>
    <Typography color="red">Pacjent może być w grupie ryzyka</Typography>
  </>
);

const ERROR = () => (
  <>
    <img src="error1.png" width="100%" style={{ marginRight: 8 }} />
    <Typography sx={{ mt: 6 }} gutterBottom variant="h4">
      Pacjent w grupie ryzyka
    </Typography>
    <Typography color="red">Pacjent znajduje się w grupie ryzyka</Typography>
  </>
);

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();

  const ok = true;
  const warning = false;
  const error = false;

  return (
    <div
      className={classNames(
        classes.container,
        ok && classes.ok,
        warning && classes.warning,
        error && classes.error
      )}
    >
      <div className={classes.contentWrapper}>
        <OK />
      </div>
      <div className={classes.buttonWrapper}>
        <Button variant="contained" onClick={() => history.push('/home')}>
          Wróć
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
