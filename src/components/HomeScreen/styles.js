import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    height: `${window.innerHeight}px`,
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 2, 2, 2),
    marginTop: theme.spacing(6),
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    position: 'absolute',
    bottom: theme.spacing(3),
  },
}));
