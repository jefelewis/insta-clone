import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-4">
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" placeholder="Search" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;