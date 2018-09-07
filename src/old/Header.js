import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light rounded" style={{backgroundColor:'#74b4f5'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" >August <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Link</a>
            </li>
           
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
