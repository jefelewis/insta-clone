import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentview">
        {this.props.comments.map((comment, key) => {
          return (
            <div className="commentscommentview" key={key}>
              {comment.username}: {comment.body}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Comment;