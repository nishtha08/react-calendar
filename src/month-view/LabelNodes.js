import React, { Component } from 'react';
import EventModal from '../event-view/addEvent';
import '../App.css';

function LabelNodes(props) {
    const nodes = props.nodes; 
    console.log(nodes + 'nodes');
    // since the two arrays are of same length 
    const normalFont = {
        fontWeight :'400',
    };
    const lighterFont = {
        fontWeight: 'lighter',
    };
    const displayMonthName = {
        display: 'block',
        fontWeight: '400',
    };
    const displayNone = {
        display:'none',
    }
    const dayArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return (
        <tr className="alignLeft height110">
            {
                dayArr.map((day,index)=>{
                    return(
                        <td key={nodes[index].toString()} onClick={(e)=>props.addEvent(e)} >
                            <div>{day}</div>
                            <div style={index === nodes.indexOf(1) ? displayMonthName : displayNone }>{props.monthName}</div> 
                            <div style={index >= nodes.indexOf(1) ? normalFont : lighterFont}> {nodes[index]}</div>
                            <EventModal />
                        </td>
                    )
                })
            } 
        </tr>
      )
  } 

  export default LabelNodes;







