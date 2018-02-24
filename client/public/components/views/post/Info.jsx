import React, { Component } from 'react';

class Info extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // OnClick Handler that sends the user info all the way back up to view, to render the profile page instead of PostList
    return (
      <div onClick={()=> {this.props.profileclick(this.props.user)}}>
        <img src={this.props.user.profile_picture} height="150" width="150" /><br />
        {this.props.user.username}
      </div>
    )
  }
}

export default Info;