import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(({ spacing }) => ({
  container: {
    marginBottom: spacing(2),
  },
}));

const AppBar = ({ title = 'Kalkulator ryzyka' }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const show = useMediaQuery('(min-width:260px)');

  return (
    <MuiAppBar className={classes.container} position="sticky">
      <Toolbar>
        {location.pathname !== '/home' ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => history.goBack()}
            size="large"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </IconButton>
        ) : (
          ''
        )}
        {show && <Typography variant="h6">{title}</Typography>}
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.propTypes = {
  title: PropTypes.string,
  showNotifications: PropTypes.bool,
};

export default AppBar;
