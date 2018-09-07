import React, { Component } from 'react';
import '../App.css';

function NumericNodes(props) {  
    console.log(props);
    const normalFont = {
        fontWeight :'400'
    };
    const lighterFont = {
        fontWeight: 'lighter'
    };
    return (
        <tr className="alignLeft height110">
            {
                props.nodes.map((date,index)=>{
                    return(
                        <td key={props.nodes[index].toString()}>
                            <div style={ index <= props.nodes.indexOf(props.lastDate) || typeof(props.lastDate) == 'undefined' || props.nodes.indexOf(props.lastDate) == -1 ? normalFont : lighterFont }> 
                                {props.nodes[index]}
                            </div>
                        </td>
                    )
                })
            } 
        </tr>
      )
  } 

  export default NumericNodes;







