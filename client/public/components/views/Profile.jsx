import React, { Component } from 'react';
import ProfileInfo from './profile/ProfileInfo.jsx';
import axios from 'axios';

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

    this.state = {
      state: false
    };
  }

  componentDidMount() {
    const context = this;
    
    axios.get('/api/user', { params: { username: context.props.username } })
      .then((userData) => {
        axios.get('/api/follow', { params: { username: context.props.username } })
          .then((followData) => {
            axios.get('/api/post', { params: { username: context.props.username } })
              .then((postData) => {
                context.setState({
                  pic: userData.data.profile_picture,
                  bio: userData.data.bio,
                  followings: followData.data.followings.length,
                  followers: followData.data.followers.length,
                  posts: postData.data,
                  state: true
                });
              });
          });
      })
      .catch(() => {
        alert('Something went wrong here!');
      });
  }

  render() {
    return (
      <div className="profilemain">
        {this.state.state &&
          <ProfileInfo
            email={this.props.email}
            username={this.props.username}
            pic={this.state.pic}
            bio={this.state.bio}
            followings={this.state.followings}
            followers={this.state.followers}
            posts={this.state.posts}
            profileClick={this.props.profileClick}
          />
        }
      </div>
    );
  }
}

export default Profile;