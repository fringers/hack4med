import React from 'react';
import { Button } from '@mui/material';

const steps = (setMessage) => [
  {
    content: 'I aplikacja zwróci jeden z trzech statusów',
  },
  {
    // eslint-disable-next-line react/display-name
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <img
            src="ok2.png"
            width={40}
            height={40}
            style={{ margin: 4, marginRight: 12 }}
          />{' '}
          wszystko ok
        </div>
        <Button
          sx={{
            mt: 2,
            alignSelf: 'center',
            display: 'flex',
            justifySelf: 'center',
          }}
          variant="contained"
          onClick={() => {
            setMessage(1);
          }}
        >
          Sprawdź
        </Button>
      </div>
    ),
  },
  {
    // eslint-disable-next-line react/display-name
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <img
            src="warning1.png"
            width={48}
            height={48}
            style={{ marginRight: 8 }}
          />{' '}
          pacjent może wymagać hospitalizacji
        </div>
        <Button
          sx={{
            mt: 2,
            alignSelf: 'center',
            display: 'flex',
            justifySelf: 'center',
          }}
          variant="contained"
          color="secondary"
          onClick={() => {
            setMessage(2);
          }}
        >
          Sprawdź
        </Button>
      </div>
    ),
  },
  {
    // eslint-disable-next-line react/display-name
    content: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <img
            src="error1.png"
            width={48}
            height={48}
            style={{ marginRight: 8 }}
          />{' '}
          pacjent w stanie zagrożenia
        </div>{' '}
        <Button
          sx={{
            mt: 2,
            alignSelf: 'center',
            display: 'flex',
            justifySelf: 'center',
            backgroundColor: '#fa6450',
          }}
          variant="contained"
          onClick={() => {
            setMessage(3);
          }}
        >
          Sprawdź
        </Button>
      </div>
    ),
  },
];

export default steps;
