import React, { Component } from 'react';
import Postlist from './views/Postlist.jsx';
import Profile from './views/Profile.jsx';
import Comments from './views/Comments.jsx';
import Login from './views/Login.jsx';

class View extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      render: 'Postlist'
    };
  }

  profileClickHandler(e, user) {
    this.setState({
      render: 'Profile'
    });
  }
  
  render() {
    return (
      <div>
        <div>
          {/* Need to Handle these loading on certain conditions */}
          
          {!this.props.active ? <Login click={this.props.click} change={this.props.change} /> 
          : this.state.render === 'Postlist' ? <Postlist />
          : this.state.render === 'Profile' ? <Profile />
          : this.state.render ===  'Comments' ?  <Comments /> : null}
        </div>
      </div>
    );
  }
}

export default View;