import React, { Component } from 'react';
import Search from './banner/Search.jsx';
import Details from './banner/Details.jsx';
import TopshelfPic from './banner/TopshelfPic.jsx';

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <TopshelfPic />
        <Search />
        <Details active={this.props.active} click={this.props.click} userClickHandler={this.props.userClickHandler} />
      </div>
    );
  }
}

export default Banner;