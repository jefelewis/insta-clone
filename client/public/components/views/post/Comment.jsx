import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentview">
        {this.props.comments.map((comment, key) => {
          
            {for (let i = 0; i < this.props.users.length; i++) {
              if (this.props.users[i].id === comment.user_id) {
                return (
                  <div>
                    {this.props.users[i].username}: {comment.body}
                  </div>
                )
              }
            }}
            
        })}
      </div>
    );
  }
}

export default Comment;