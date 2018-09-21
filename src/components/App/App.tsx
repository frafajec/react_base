import * as React from 'react';
import * as cn from 'classnames';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Logo from 'assets/icons/logo.svg';

import styles from './App.scssm';

// ------------------------------------------------------------
const material: any = (theme: Theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
  },
});

// ------------------------------------------------------------
interface IAppProps extends WithStyles<typeof material> {}
interface IAppState {}

// ------------------------------------------------------------
class App extends React.Component<IAppProps, IAppState> {
  render() {
    const { classes } = this.props;

    return (
      <div className={cn(classes.root, styles.App)}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Logo className={styles.AppLogo} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// ------------------------------------------------------------
export default withStyles(material)(App);
