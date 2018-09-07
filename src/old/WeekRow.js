import React , { Component }  from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  singleton: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
    boxShadow: '0px 2px 2px -2px rgba(0, 0, 0, 0.2)'
  }
});

class Month extends Component {

  render() {
    const totalDays = 31;
    const dataForARow = 31

  }
}
class WeekRow extends Component {
  
  render(){
    //firstDayOfMonth = emptyNodes;
    const { classes, firstDayOfMonth, daysInMonth } = this.props;
    const numericNodesOfAWeek = Array.from({length: 7 - firstDayOfMonth }, (v, k) => k+1);  
    
    const arr = Array.from({length: 7 }, (v, k) => k+1); 
    return (
      <Grid container spacing={0}>
        <EmptyNodes emptyNodesOfAWeek={firstDayOfMonth} classes={classes}/>
          { 
            numericNodesOfAWeek.map((item) => {
              return (
                <div className={classes.root}>
                  <Grid item>
                    <div className={classes.singleton}>{item}</div>
                  </Grid>
                </div>
              )
            })
          }
      </Grid>
     );
  }
}

function EmptyNodes(props) {
  const { classes } = props;
  const nodeCount = props.emptyNodesOfAWeek !== 0 ? [...Array(props.emptyNodesOfAWeek).keys()] : '';
  return (
    nodeCount == '' ? null : 
      <div className={classes.root}>
        <Grid item>
          <div className={classes.singleton}></div>
       </Grid>
      </div>
    )
} 

WeekRow.propTypes = {
  firstDayOfMonth: PropTypes.number.isRequired,
  daysInMonth: PropTypes.number.isRequired,
};

export default withStyles(styles)(WeekRow);