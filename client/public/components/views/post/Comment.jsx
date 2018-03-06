import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this.change = this.change.bind(this);
  }

  comment(comm) {
    axios.post('/api/post', { username: this.props.email, data: { type: 2, body: comm, parent_id: this.props.postId } })
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('error');
      });
  }

  change(e) {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value
    });
    console.log(this.state);
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
        <form>
          <input type="text" onChange={this.change}></input>
        </form>
        <button onClick={() => {this.comment(this.state.comment)}}>Comment</button>
      </div>
    );
  }
}

export default Comment;