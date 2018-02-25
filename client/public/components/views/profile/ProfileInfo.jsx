// Requirements: React
import React from 'react';


// Component: ProfileInfo
class ProfileInfo extends React.Component{
  constructor(){
    super();
  }


  render() {
    return (
      <div className="container col-md-10" id="details">

        <div className="row">
          <div className="col text-center text-align-center">
            <h4><strong>Username</strong></h4>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <img src="https://pvrinstitute.org/handlers/profileimagehandler.ashx?id=5262" id="profilepic"></img>
          </div>


          <div className="col">
            <h6><strong>Posts</strong></h6>
            <p>50</p>
          </div>
          
          <div className="col">
            <h6><strong>Followers</strong></h6>
            <p>400</p>
          </div>
          
          <div className="col">
            <h6><strong>Following</strong></h6>
            <p>300</p>
          </div>

          <div className="col">
            <button type="button" className="btn btn-primary btn-sm"><a/>Follow</button>
          </div>
        </div>

        <div className="row">
          <h6 className="col text-center">This is a test bio</h6>
        </div>
        
      </div>
    );
  }


}
export default ProfileInfo;
