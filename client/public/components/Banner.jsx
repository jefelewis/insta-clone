import React, { Component } from 'react';
import Search from './banner/Search.jsx';
import Details from './banner/Details.jsx';


class Banner extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        
          <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
          <button type="submit" className="btn btn-default">Submit</button>
          </div>
          </form>

        );
    }
}

export default Banner;