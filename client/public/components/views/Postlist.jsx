import React, { Component } from 'react';
import Post from './Post.jsx';
import Add from './profile/Add.jsx';
class Postlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div name='Postlist'>
        <Add />
        {this.props.posts && this.props.posts.map((post, key) => {
          console.log(this.props);
          for (let i = 0; i < this.props.users.length; i++) {
            if (post.user_id === this.props.users[i].id) {
              return (
                <Post post={post} key={key} user={this.props.users[i]}/>
              )
            }
          }
          
        })}
      </div>
    );
  }
}

export default Postlist;