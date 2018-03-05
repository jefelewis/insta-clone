import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentview">
        {this.props.comments.map((comment) => {
          return (
            <div className="commentscommentview">
              {comment.username}: {comment.body}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Comment;