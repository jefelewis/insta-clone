import React, { Component } from 'react';
import Search from './banner/Search.jsx';
import Details from './banner/Details.jsx';
import TopshelfPic from './banner/TopshelfPic.jsx';


class Banner extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div className="row">
          <TopshelfPic />
          <Search />
          <Details />
        </div>
        );
    }
}

export default Banner;