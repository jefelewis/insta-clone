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
<<<<<<< HEAD
      <div className="rightbanner">
        <button style={{width: 70}}><Link to="/"> Home </Link></button><br />
        <button style={{width: 70}} onClick={this.props.userClickHandler}><Link to="/user"> User </Link></button><br />
        { !this.props.active ? null : <button style={{width: 70}} name="logout" onClick={this.props.click}>Logout</button> }
      </div>
=======
            <div className="rightbanner">
              <button style={{width: 70}}><Link to="/"> Home </Link></button><br />
              <button style={{width: 70}} onClick={this.props.userClickHandler}><Link to="/user"> User </Link></button><br />
              { !this.props.active ? null : <button style={{width: 70}} name="logout" onClick={this.props.click}>Logout</button> }
            </div>
>>>>>>> save before commit/rebase
    );
  }
}

export default Details;