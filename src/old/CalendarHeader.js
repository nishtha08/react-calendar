import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  cell: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.2)'
  },
  singleton: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: '0px 2px 2px -2px rgba(0, 0, 0, 0.2)'
  }
});

function CalendarHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        <Grid item xs>
          <div className={classes.cell}>S</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>M</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>T</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>W</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>T</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>F</div>
        </Grid>
        <Grid item xs>
          <div className={classes.cell}>S</div>
        </Grid>
      </Grid>
    </div>
  );
}

CalendarHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalendarHeader);