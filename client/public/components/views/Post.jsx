import React, { Component } from 'react';
import Content from './post/Content.jsx';
import Info from './post/Info.jsx';
import Likes from './post/Likes.jsx';
import Comments from './Comments.jsx';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    console.log('posts props:', props);
    this.state = {
      likes: props.post.likesCount
    };

    this.like = this.like.bind(this);
  }

  like() {
    const context = this;
    
    axios.post('/like', { post_id: this.props.id, user_id: this.props.email })
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
    return (
      <div>
        <Content content={this.props.post.body} />
        <Info username={this.props.username} profileClick={this.props.profileClick} />
        <Likes like={this.props.like} likes={this.state.likes} />
        <Comments profileClick={this.props.profileClick} comments={this.props.post.comments} />
      </div>
    );
  }
}

export default Post;