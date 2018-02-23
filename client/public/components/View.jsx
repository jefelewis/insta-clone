import React, { Component } from 'react';
import Postlist from './views/Postlist.jsx';
import Profile from './views/Profile.jsx';
import Comments from './views/Comments.jsx';
import Login from './views/Login.jsx';

class View extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>
          {/* Need to Handle these loading on certain conditions */}
          <Postlist />
          {/* <Profile /> */}
          <Login click={this.props.click} change={this.props.change}/>
          <Comments />
        </div>
      </div>
    );
  }
}

export default View;