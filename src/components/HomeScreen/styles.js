import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    background: theme.palette.background.new2,
    borderRadius: 44,
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
    height: '80%',
    overflowY: 'scroll',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    position: 'absolute',
    bottom: theme.spacing(3),
  },
}));
