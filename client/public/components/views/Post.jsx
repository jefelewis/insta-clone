import React, { Component } from 'react';
import Content from './post/Comment.jsx';
import Info from './post/Info.jsx';
import Likes from './post/Likes.jsx';
import Comment from './post/Comment.jsx';
class Post extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Content />
        <Info />
        <Likes />
        <Comment />
      </div>
    )
  }
}

export default Post;