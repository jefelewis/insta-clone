import React, { Component } from 'react';
import Post from './Post.jsx';
import Add from './profile/Add.jsx';
class Postlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div name='Postlist'>
        <Add />
        {this.props.data.map((content) => {
          return (
            <Post content={content} />
          )
        })}
      </div>
    );
  }
}

export default Postlist;