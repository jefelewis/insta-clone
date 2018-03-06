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
      <div className="rightbanner">
        {this.props.active ? <button style={{width: 80}} name='follow' onClick={this.props.click}>{this.props.following ? 'Everyone' : 'Following' }</button> : null }
        {/* <button style={{width: 70}} onClick={this.props.userClickHandler}><Link to="/user"> Profile </Link></button><br /> */}
        { !this.props.active ? null : <button style={{width: 80}} name="logout" onClick={this.props.click}>Logout</button> }
      </div>
    );
  }
}

export default Details;