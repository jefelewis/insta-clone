import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button name="comment" onClick={this.props.viewComments}>View Comments</button>
      </div>
    );
  }
}

export default Comment;