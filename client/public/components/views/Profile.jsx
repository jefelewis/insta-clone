import React, { Component } from 'react';
import ProfileInfo from './profile/ProfileInfo.jsx';

//	There will be lots of sub components here
//	path " import X from './profile/X.jsx' "
/*
	Your Pofile Image Compnent
	Video/Picture Component
	Like Bar Component
	Comments Component
	View All Component (Could be added to Comments Component)
*/

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProfilePic />
        <ProfileInfo />
      </div>
    );
  }
}

export default Profile;
