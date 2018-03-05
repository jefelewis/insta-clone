import React, { Component } from 'react';
import Content from './post/Content.jsx';
import Info from './post/Info.jsx';
import Likes from './post/Likes.jsx';
import Comment from './post/Comment.jsx';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   likes: props.post.likesCount
    // };

    this.like = this.like.bind(this);
  }

  like() {
    const context = this;
    
    axios.post('/api/like', { post_id: this.props.id, user_id: this.props.email })
      .then(() => {
        context.setState({
          likes: context.state.likes + 1
        });
      })
      .catch(() => {
        alert('Something went wrong here!');
      });
  }

  render() {
    console.log(this.props)
    return (
      
      <div className="postview">
        <Info image={this.props.user.profile_picture} username={this.props.user.username}/>
        <Content content={this.props.post.body}/>
        <Likes likes={this.props.post.likesCount}/>
        <Comment comments={this.props.post.comments}/>
      </div>
    );
  }
}

export default Post;