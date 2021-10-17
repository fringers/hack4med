import React, { useState, Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Tour from 'reactour';
import { Button, TextField, MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import { UserContext } from '../App';
import steps from './steps';
import useStyles from './styles';

/*
'PLEC', 'WIEK', 'WZROST', 'PRZENIESIENIE', 'MASA_CIALA', 'BMI', 'RRS',
'RRD', 'PO2_ATM', 'ODDECH', 'AS', 'NT', 'DM', 'ASTMA', 'HF', 'AF', 'UDAR',
'CHD', 'MI', 'ZAP_PLUC', 'HDCZ', 'BB', 'STATYNA', 'ASA', 'NOAC', 'MRA',
'ACE', 'SARTANY', 'CA_BLOKER', 'ZGON_LUB_OIT'
*/

const INPUTS = [
  ['Przeniesienie', 'Nie'],
  ['Oddech', 'Tak'],
  ['Astma', 'Nie'],
  ['Zapalenie płuc', 'Nie'],
  ['RRS', 'Nie'],
  ['RRD', 'Nie'],
  ['PO2_ATM', 'Nie'],
  ['AS', 'Nie'],
  ['NT', 'Nie'],
  ['DM', 'Nie'],
  ['HF', 'Nie'],
  ['AF', 'Nie'],
  ['UDAR', 'Nie'],
  ['CHD', 'Nie'],
  ['MI', 'Nie'],
  ['HDCZ', 'Nie'],
  ['BB', 'Nie'],
  ['STATYNA', 'Nie'],
  ['ASA', 'Nie'],
  ['NOAC', 'Nie'],
  ['MRA', 'Nie'],
  ['ACE', 'Nie'],
  ['SARTANY', 'Nie'],
  ['CA_BLOKER', 'Nie'],
];

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const online = useContext(UserContext);

  const [isTourOpen, setIsTourOpen] = useState(
    localStorage.getItem('sawTour1') !== 'false'
  );
  const [plec, setPlec] = useState('Kobieta');
  const [wiek, setWiek] = useState(20);
  const [wzrost, setWzrost] = useState(165);
  const [masa, setMasa] = useState(60);
  const [bmi, setBmi] = useState(20);
  const [fields, setFields] = useState(
    INPUTS.reduce((result, item) => {
      result[item[0]] = item[1];
      return result;
    }, {})
  );

  const handleSubmit = () => {
    history.push('/result');
    localStorage.setItem('sawTour1', 'false');
  };
  const isValid = !!plec && !!wiek && !!wzrost && !!masa && !!bmi;

  return (
    <div className={classes.container}>
      <Tour
        accentColor={teal[500]}
        rounded={8}
        scrollDuration={2}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => {
          localStorage.setItem('sawTour1', 'false');
          setIsTourOpen(false);
        }}
      />
      <div className={classes.titleWrapper}>
        <Typography variant="h5" data-tour="two">
          Sprawdź pacjenta
        </Typography>
      </div>
      <div className={classes.formWrapper} data-tour="three">
        <Typography fontWeight="bold" color="primary">
          Płeć
        </Typography>
        <TextField
          sx={{ mb: 2 }}
          error={!plec}
          select
          value={plec}
          color="primary"
          placeholder="Kobieta"
          onChange={(e) => setPlec(e.target.value)}
        >
          <MenuItem value="Kobieta">Kobieta</MenuItem>
          <MenuItem value="Mężczyzna">Mężczyzna</MenuItem>
        </TextField>

        <Typography fontWeight="bold" color="primary">
          Wiek
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!wiek}
          placeholder="20"
          sx={{ mb: 2 }}
          variant="outlined"
          value={wiek}
          onChange={(e) => setWiek(e.target.value)}
        />

        <Typography fontWeight="bold" color="primary">
          Wzrost
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!wzrost}
          placeholder="168"
          sx={{ mb: 2 }}
          variant="outlined"
          value={wzrost}
          onChange={(e) => setWzrost(e.target.value)}
        />

        <Typography fontWeight="bold" color="primary">
          Masa ciała
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!masa}
          placeholder="70"
          sx={{ mb: 2 }}
          variant="outlined"
          value={masa}
          onChange={(e) => setMasa(e.target.value)}
        />

        <Typography fontWeight="bold" color="primary">
          BMI
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          placeholder="20"
          error={!bmi}
          sx={{ mb: 2 }}
          variant="outlined"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
        />

        {INPUTS.map((value) => (
          <Fragment key={value[0]}>
            <Typography fontWeight="bold" color="primary">
              {value[0]}
            </Typography>
            <TextField
              sx={{ mb: 2 }}
              select
              value={fields[value[0]]}
              color="primary"
              onChange={(e) =>
                setFields({ ...fields, [value[0]]: e.target.value })
              }
            >
              <MenuItem value="Tak">Tak</MenuItem>
              <MenuItem value="Nie">Nie</MenuItem>
            </TextField>
          </Fragment>
        ))}
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          data-tour="four"
          classes={{ root: classes.button }}
          variant="contained"
          onClick={() => handleSubmit()}
          type="submit"
          color="secondary"
          disabled={!isValid || !online}
        >
          Sprawdź
        </Button>
      </div>
    </div>
  );
};

export default HomeScreen;
