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
    // const context = this;
    
    // axios.post('/like', { post_id: this.props.id, user_id: this.props.email })
    //   .then(() => {
    //     context.setState({
    //       likes: context.state.likes + 1
    //     });
    //   })
    //   .catch(() => {
    //     alert('Something went wrong here!');
    //   });
  }

  render() {
    return (
      
      <div>
        <Info image={this.props.content.image} username={this.props.content.username}/>
        <Content content={this.props.content.body}/>
        <Likes likes={this.props.content.likes}/>
        <Comment comments={this.props.content.comments}/>
      </div>
    );
  }
}

export default Post;