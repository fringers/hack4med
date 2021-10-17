import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { Snackbar, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ThemeProvider } from '@mui/material/styles';
import { theme, offlineTheme } from './themes';

import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
import ResultScreen from './ResultScreen';

const useStyles = makeStyles(() => ({
  switchWrapper: {
    height: '100%',
    // hack to make the ios border work
    '& > *:first-child': {
      height: '100%',
      '& > *:first-child': {
        height: '100%',
        '& > *:first-child': {
          height: '100%',
        },
      },
    },
  },
  manageApp: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    left: 452 + 48 + 100,
    top: 48,
    '& > *:first-child': {
      marginBottom: 8,
    },
  },
  snackbar: {
    position: 'absolute !important',
    bottom: '90px !important',
  },
  mobileWrapper: {
    position: 'absolute',
    marginLeft: 48,
    width: 452,
    marginTop: 45,
    height: 980,
    borderRadius: 46,
    overflow: 'hidden',
  },
  img: {
    position: 'absolute',
    width: 560,
  },
}));

const getSnackbarMessgae = (online, uploading) => {
  const message = online ? 'Odzyskano połączenie!' : 'Jesteś offline';
  if (uploading) return `${message} Trwa wysyłanie zaległych zgłoszeń...`;
  return message;
};

export const UserContext = React.createContext();

const App = () => {
  const classes = useStyles();
  const [online, setOnline] = useState(window.navigator.onLine);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleNetworkChange = () => {
    setOnline(window.navigator.onLine);
    setOpenSnackbar(true);

    //TODO: for cached requests
    let myCache = window.myCache;
    if (myCache.length) setUploading(true);
    if (myCache.length) {
      // myCache.forEach(
      // );
      window.myCache = [];
      setUploading(false);
    }
  };

  useEffect(() => {
    if (typeof window.myCache !== Array) {
      window.myCache = [];
    }

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
    return () => {
      window.removeEventListener('online', handleNetworkChange);
      window.removeEventListener('offline', handleNetworkChange);
    };
  }, []);

  return (
    <UserContext.Provider value={online}>
      <ThemeProvider theme={online ? theme : offlineTheme}>
        <img className={classes.img} src="/iphone-12_b.png" />
        <div className={classes.manageApp} data-tour="control-panel">
          <Button
            variant="contained"
            onClick={() => {
              setOnline(!online);
              setOpenSnackbar(true);
            }}
            color="primary"
          >
            {online ? 'Tryb offline' : 'Tryb online'}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.clear();
              window.location.href = '/';
            }}
            color="primary"
          >
            Odśwież aplikację
          </Button>
        </div>
        <div className={classes.mobileWrapper}>
          <Snackbar
            classes={{ root: classes.snackbar }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={openSnackbar}
            onClose={() => setOpenSnackbar(false)}
            message={getSnackbarMessgae(online, uploading)}
          />
          <BrowserRouter>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className={classes.switchWrapper}
            >
              <AnimatedRoute
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                  height: '100%',
                })}
                exact
                path="/"
                component={WelcomeScreen}
              />
              <AnimatedRoute
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
                exact
                path="/home"
                component={HomeScreen}
              />
              <AnimatedRoute
                atEnter={{ offset: -100 }}
                atLeave={{ offset: -100 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
                exact
                path="/result"
                component={ResultScreen}
              />
            </AnimatedSwitch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
