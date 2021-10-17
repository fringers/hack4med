import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import Tour from 'reactour';
import { Button, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import steps from './steps';
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
  const [message, setMessage] = React.useState(0);
  const [isTourOpen, setIsTourOpen] = React.useState(
    localStorage.getItem('sawTour2') !== 'false'
  );

  const updatedSteps = steps(setMessage);

  const ok = message == 1 || !isTourOpen;
  const warning = message == 2;
  const error = message == 3;

  return (
    <div
      className={classNames(
        classes.container,
        ok && classes.ok,
        warning && classes.warning,
        error && classes.error
      )}
    >
      <Tour
        accentColor={teal[500]}
        rounded={8}
        scrollDuration={2}
        steps={updatedSteps}
        stepInteraction={false}
        isOpen={isTourOpen}
        onRequestClose={() => {
          localStorage.setItem('sawTour2', 'false');
          setIsTourOpen(false);
          setMessage(1);
        }}
      />
      <div className={classes.contentWrapper}>
        {ok && <OK />}
        {warning && <WARNING />}
        {error && <ERROR />}
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
