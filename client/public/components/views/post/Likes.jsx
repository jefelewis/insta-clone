import React, { Component } from 'react';

class Likes extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.like} >{this.props.likes} People Liked This!</button> 
      </div>
    )
  }
}

export default Likes;