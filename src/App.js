import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MonthView from './month-view/MonthView';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <ul className="flex-container wrap">
            <li className="flex-item">August</li>
            <li className="flex-item">2018</li>
            <li className="flex-item">Change View (dropdown)</li>
            <li className="flex-item">no</li>
          </ul>
        </div>
        <MonthView/>
      </div>
    );
  }
}

export default App;
