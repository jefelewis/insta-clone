import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActiveDropdown from "react-bootstrap-navdropdown-active";
import Profile from "../views/Profile.jsx";
import Login from "../views/Login.jsx";
import View from "../View.jsx";
const firebase = require("firebase");

class Details extends Component {
  constructor() {
    super();
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }
  onClickHandler(e) {
    //TODO: CHECK IF VALID EMAIL
    if (e.target.name === "signin") {
      const errHandler = firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      errHandler.catch(e => console.log(e.message));
    } else {
      const errHandler = firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
      errHandler.catch(e => console.log(e.message));
    }
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="container">
          <div className="row borderless">
          <div className="col-md-7"></div>
            <div className="col-md-5">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/user"> User </Link>
              </li>
              <li>
                <Link to="/login"> Login </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
