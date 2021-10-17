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
  ['HF', 'Nie'],
  ['PCHN', 'Nie'],
];

const HomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  const online = useContext(UserContext);

  const [isTourOpen, setIsTourOpen] = useState(
    localStorage.getItem('sawTour1') !== 'false'
  );

  const [RRD, setRRD] = useState(82);
  const [Oddech, setOddech] = useState(16);
  const [AS, setAS] = useState(80);
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
  const isValid = !!RRD && !!Oddech && !!AS;

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
          RRD
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!RRD}
          placeholder="20"
          sx={{ mb: 2 }}
          variant="outlined"
          value={RRD}
          onChange={(e) => setRRD(e.target.value)}
        />

        <Typography fontWeight="bold" color="primary">
          Oddech
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!Oddech}
          placeholder="20"
          sx={{ mb: 2 }}
          variant="outlined"
          value={Oddech}
          onChange={(e) => setOddech(e.target.value)}
        />

        <Typography fontWeight="bold" color="primary">
          AS
        </Typography>
        <TextField
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          error={!AS}
          placeholder="168"
          sx={{ mb: 2 }}
          variant="outlined"
          value={AS}
          onChange={(e) => setAS(e.target.value)}
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
