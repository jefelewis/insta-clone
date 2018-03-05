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
          
          {!this.props.active ? <Login click={this.props.click} change={this.props.change} /> 
          : this.props.render === 'Postlist' ? <Postlist />
          : this.props.render === 'Profile' ? <Profile email={this.props.email} />
          : this.props.render ===  'Comments' ?  <Comments /> : null}
        </div>
      </div>
    );
  }
}

export default View;