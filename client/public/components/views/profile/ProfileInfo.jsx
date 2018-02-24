// Requirements: React
import React from 'react';


// Component: ProfileInfo
class ProfileInfo extends React.Component{
  constructor(){
    super();
  }


  render() {
    return (
      <div className="userinfo">
        <div className="user">
          <h5><strong>Jeff Lewis</strong></h5>
        </div>

        <div className="followuser">
          <button type="button" className="btn btn-primary btn-sm">Follow</button>
        </div>

        <div className="posts">
          <h6><strong>Posts</strong></h6>
          <p>50</p>
        </div>
        
        <div className="followers">
          <h6><strong>Followers</strong></h6>
          <p>400</p>
        </div>
        
        <div className="following">
          <h6><strong>Following</strong></h6>
          <p>300</p>
        </div>

        <div className="bio">
          <h6>user.bio</h6>
        </div>
        
      </div>
    );
  }


}
export default ProfileInfo;
