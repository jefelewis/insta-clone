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
              <button><Link to="/"> Home </Link></button><br />
              <button onClick={this.props.userClickHandler}><Link to="/user"> User </Link></button><br />
              { !this.props.active ? null : <button name="logout" onClick={this.props.click}>Logout</button> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;