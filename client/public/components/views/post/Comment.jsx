import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment) => {
          return (
            <div>
              {comment.username}: {comment.body}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Comment;