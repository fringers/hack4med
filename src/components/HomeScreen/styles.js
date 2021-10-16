import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    background: theme.palette.background.default,
    borderRadius: 47,
    height: '100%',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: theme.spacing(2),
    color: theme.palette.primary.dark,
  },
  formWrapper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: theme.spacing(2),
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
