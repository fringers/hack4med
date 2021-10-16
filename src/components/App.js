import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import { Snackbar, makeStyles } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/core/styles';

import WelcomeScreen from './WelcomeScreen';
import HomeScreen from './HomeScreen';
// import { theme, offlineTheme } from './themes';

const useStyles = makeStyles(() => ({
  switchWrapper: {
    position: 'relative',
    '& > div': {
      width: '100%',
      position: 'absolute',
    },
  },
  snackbar: {
    bottom: 80,
  },
  snackbar2: {
    bottom: 140,
  },
}));

const getSnackbarMessgae = (online, uploading) => {
  const message = online ? 'Odzyskano połączenie!' : 'Jesteś offline';
  if (uploading) return `${message} Trwa wysyłanie zaległych zgłoszeń...`;
  return message;
};

export const UserContext = React.createContext(undefined);

const App = () => {
  const classes = useStyles();
  const [online, setOnline] = useState(window.navigator.onLine);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleNetworkChange = () => {
    setOnline(window.navigator.onLine);
    let myCache = window.myCache;

    if (myCache.length) setUploading(true);
    setOpenSnackbar(true);

    if (myCache.length) {
      //TODO: upload cached requests
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
    <UserContext.Provider value={'user'}>
      {/* <ThemeProvider theme={online ? theme() : offlineTheme()}> */}
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
          </AnimatedSwitch>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </UserContext.Provider>
  );
};

export default App;