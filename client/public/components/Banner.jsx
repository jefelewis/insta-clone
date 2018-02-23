import React, { Component } from "react";
import Search from "./banner/Search.jsx";
import Details from "./banner/Details.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="btn-group">


      <div className="col-md-4">
        <div className="left">
          <img src="../TopShelf.png" height="100" width="100" />
        </div>
        </div>



      <div className="col-md-4">
        <div className="top">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" placeholder="Search" />
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>


        <div className="col-md-4">
        <div className="right">
        <button
          type="button"
          className="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          float="right">
          <img src="../ButtonPic.jpg" height="100" width="100" />
          <span className="caret" />
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
        </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Banner;
