// Requirements: React
import React from 'react';


// Component: ProfileInfo
class ProfileInfo extends React.Component{
  constructor(){
    super();
  }


  render() {
    return (
      <div>
        <h3>{this.props.username}</h3>
        <h3>{this.props.bio}</h3>
        <h3>Posts</h3>
        <h3>Followers</h3>
        <h3>Following</h3>
      </div>
    );
  }


}
export default ProfileInfo;
