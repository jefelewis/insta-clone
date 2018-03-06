import React, { Component } from 'react';
import Content from './post/Content.jsx';
import Info from './post/Info.jsx';
import Likes from './post/Likes.jsx';
import Comment from './post/Comment.jsx';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likesCount
    };

    this.like = this.like.bind(this);
  }

  like() {
    const context = this;
    
    console.log('heree', this.props.email);
    axios.post('/api/like', { username: this.props.email, postId: this.props.post.id })
      .then(() => {
        console.log('hereee');
        context.setState({
          likes: context.state.likes + 1
        });
      })
      .catch(() => {
        alert('Something went wrong here!');
      });
  }

  render() {
    return (
      
      <div className="postview">
        <Info image={this.props.user.profile_picture} username={this.props.user.username} click={this.props.click}/>
        <Content content={this.props.post.body}/>
        <Comment comments={this.props.post.comments} postId={this.props.post.id} users={this.props.users} email={this.props.email} />
        <Likes like={this.like} likes={this.props.post.likesCount}/>
      </div>
    );
  }
}

export default Post;