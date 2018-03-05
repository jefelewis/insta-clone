import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    const context = this;
    
    axios.get('/api/user', { params: { username: this.props.username } })
      .then(({ data }) => {
        context.setState({ user: data });
      })
      .catch(() => {
        alert('Something went wrong here!');
      });
  }

  render() {
    // OnClick Handler that sends the user info all the way back up to view, to render the profile page instead of PostList
    return (
      <div onClick={()=> {this.props.profileClick(this.props.username)}}>
        <img src={this.state.user.profile_picture} height="150" width="150" /><br />
      </div>
    )
  }
}

export default Info;