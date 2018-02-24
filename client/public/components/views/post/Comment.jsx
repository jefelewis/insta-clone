import React, { Component } from 'react';

class Comment extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <b onClick={() => {this.props.profileclick(this.props.userone)}}>{this.props.userone.username}:</b> {this.props.userone.body} <br />
        <b onClick={() => {this.props.profileclick(this.props.usertwo)}}>{this.props.usertwo.username}:</b> {this.props.usertwo.body} <br />
        <button name="comment" onClick={this.props.click}>See All Comments.</button>
      </div>
    )
  }
}

export default Comment;