import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    height: `${window.innerHeight}px`,
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2, 2, 2),
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    position: 'absolute',
    bottom: theme.spacing(3),
  },
}));
