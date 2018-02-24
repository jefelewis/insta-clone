import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ActiveDropdown from 'react-bootstrap-navdropdown-active';
import Profile from '../views/Profile.jsx';
import Login from '../views/Login.jsx';
import View from '../View.jsx';
import firebase from 'firebase';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="container">
          <div className="row borderless">
            <div className="col-md-7"></div>
            <div className="col-md-5">
              <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/user"> User </Link></li>
                <li><Link to="/login"> Login </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
