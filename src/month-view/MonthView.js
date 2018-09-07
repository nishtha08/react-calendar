import React, { Component } from 'react';
import LabelNodes from './LabelNodes';
import NumericNodes from './NumericNodes';
import '../App.css';

class MonthView extends Component {
    constructor(props){
        super(props);
        var date = new Date();
        var currentDate = new Date();
        currentDate.setDate(date.getDate()+200);
        console.log(currentDate);
        var firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        var lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
        // total number of days = last date of the month :
        var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        var lastDateOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        var nodesOfLastMonth = Array.from({length: firstDayOfMonth },(v,k) => k + lastDateOfPreviousMonth - firstDayOfMonth + 1 );
        var nodesOfNextMonth = Array.from({length: 41 - (daysInMonth + nodesOfLastMonth.length - 1)},(v,k) => k+1);
        var nodesToBePlotted = [...nodesOfLastMonth,...Array.from({length: daysInMonth},(v,k)=> k+1), ...nodesOfNextMonth];
        console.log( nodesToBePlotted);

        this.state = {
            nodesToBePlotted : nodesToBePlotted,
            daysInMonth : daysInMonth,
            monthName : 'Sep',
            eventModal : 'hidden',
        }

    }

    addEvent = (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        this.setState((state)=>({
            eventModal: 'display',
        }))
    }

    render() {
        const { nodesToBePlotted , daysInMonth , monthName } = this.state;
        return (
        <div className="container-fluid pl0 pr0">
            <table className="table table-bordered">
                <tbody>
                    <LabelNodes nodes={[...nodesToBePlotted.slice(0,7)]} monthName={monthName} addEvent={(e)=>this.addEvent(e)}/>
                    <NumericNodes nodes={[...nodesToBePlotted.slice(7,14)]}  />
                    <NumericNodes nodes={[...nodesToBePlotted.slice(14,21)]}  />
                    <NumericNodes nodes={[...nodesToBePlotted.slice(21,28)]}  />
                    <NumericNodes nodes={[...nodesToBePlotted.slice(28,35)]} lastDate={daysInMonth} />
                    <NumericNodes nodes={[...nodesToBePlotted.slice(nodesToBePlotted.length-7,nodesToBePlotted.length)]}  lastDate={daysInMonth}/>
                </tbody>
            </table>
        </div>  
        );
    }
}

export default MonthView;
