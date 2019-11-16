import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    container: {
      flexGrow: 1,
      padding: theme.spacing(2),
      marginTop: theme.spacing(8),
    },
  }),
);
