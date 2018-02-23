import React, { Component } from "react";
import Search from "./banner/Search.jsx";
import Details from "./banner/Details.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// jquery bootstrap ajax
const $ = require('jQuery');
const bootstrap = require('bootstrap');

class Banner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Profilepic
          <span className="caret" />
        </button>
        <ul className="dropdown-menu">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/user"> User </Link>
          </li>
          <li role="separator" className="divider" />
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Banner;
