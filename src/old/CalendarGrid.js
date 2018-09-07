import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WeekRow from './WeekRow';
import moment from 'moment';

class CalendarGrid extends Component {
  constructor(props){
    super(props);
    this.state = { daysInMonth : 31 ,  firstDayOfMonth: 0 };
  }

  componentDidMount = () => {
    let currentDate = new Date();
    // let firstDayOfMonthArr = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    // let firstDayOfMonth = firstDayOfMonthArr.split(' ');
    let firstDayOfMonth = new Date(2018,1, 1);
    let daysInMonth = moment(currentDate).daysInMonth();
    this.setState((state)=> {
      return { daysInMonth : daysInMonth ,  firstDayOfMonth: firstDayOfMonth }
    })
  }

  render() {
    const { firstDayOfMonth, daysInMonth } = this.state;
    return (
      // <Grid container spacing={0}>
         <WeekRow firstDayOfMonth={firstDayOfMonth} daysInMonth={daysInMonth}/>
      // </Grid> 
    );
  }
}

export default CalendarGrid;

//notes : 
// var date = new Date();
// var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
// the current month is August, so it will return dates for August. 
// If you want some other month, create a date for the first of the month and use the above algorithm to get the last, 
// e.g. for November 2014: var firstDay = new Date(2014,10,1); var lastDay = new Date(2014,11,0);
