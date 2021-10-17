import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    background: theme.palette.background.new2,
    borderRadius: 44,
    height: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    textAlign: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  ok: {},
  warning: {},
  error: {},
}));
