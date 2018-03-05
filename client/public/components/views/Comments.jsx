import React, { Component } from 'react';
import Comment from './post/Comment.jsx';
//	There will be lots of sub components here
//	path " import X from './comment/X.jsx' "

/*
	Your Pofile Image Compnent
	Video/Picture Component
	Like Bar Component
	Comments Component
	View All Component (Could be added to Comments Component)
*/

class Comments extends Component {
  constructor(props) {
    super(props);
    console.log('commentss props:', props);
    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment) {
    return (
      <Comment comment={comment}>
        {comment.comments.map((sub) =>
          this.renderComment(sub)
        )}
      </Comment>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((comment) => 
            this.renderComment(comment)
          )
        }
      </div>
    );
  }
}

export default Comments;