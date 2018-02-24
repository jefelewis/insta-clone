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
        <div className="userdetails">
          <h5><strong>user.username</strong></h5>
          <h6>user.bio</h6>
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

        <div className="followuser">
          <button type="button" class="btn btn-primary">Follow</button>
        </div>

      </div>
    );
  }


}
export default ProfileInfo;
