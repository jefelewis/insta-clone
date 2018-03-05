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
    console.log('hello');
    axios.get('/api/user', { params: { username: this.props.email } })
      .then((userData) => {
        console.log('after');
        axios.get('/api/follow', { params: { username: this.props.email } })
          .then((followData) => {
            axios.get('/api/post', { params: { username: this.props.email } })
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
      <div>
        {this.state.state &&
          <ProfileInfo
            email={this.props.email}
            pic={this.state.pic}
            bio={this.state.bio}
            followings={this.state.followings}
            followers={this.state.followers}
            posts={this.state.posts}
          />
        }
      </div>
    );
  }
}

export default Profile;