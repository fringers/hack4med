import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, spacing }) => ({
  container: {
    alignItems: 'center',
    backgroundColor: palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  wrapper: {
    paddingBottom: spacing(12),
  },
  img: {
    width: 256,
  },
  title: {
    marginBottom: spacing(12),
  },
}));
