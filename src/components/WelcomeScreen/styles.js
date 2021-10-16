import makeStyles from '@mui/styles/makeStyles';

export default makeStyles(({ palette, spacing }) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    background: palette.background.new,
    borderRadius: 44,
    padding: spacing(2),
  },
  wrapper: {
    paddingBottom: spacing(12),
  },
  img: {
    width: 256,
  },
  text: {
    marginBottom: spacing(12),
    textAlign: 'center',
  },
}));
