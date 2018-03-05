import React from 'react';
import Post from '../Post.jsx';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class ProfileInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="details">

        
          <div className="hellotop">
            <h4><strong>{this.props.username}</strong></h4>
          </div>
        
        
        <div className="hellopic">
          <img src={this.props.pic} id="profilepic"></img>
        </div>

        <div className="hello">
          <h6><strong>Posts</strong></h6>
          <p>{this.props.posts.length}</p>
        </div>
        
        <div className="hello">
          <h6><strong>Followers</strong></h6>
          <p>{this.props.followers}</p>
        </div>
        
        <div className="hello">
          <h6><strong>Following</strong></h6>
          <p>{this.props.followings}</p>
        </div>

        <div className="hello">
          <button type="button" className="btn btn-primary btn-sm"><a/>Follow</button>
        </div>

        <div className="hellobottom">
          <h6 className="col text-center">{this.props.bio}</h6>
        </div>

        {/* <div>
          {
            this.props.posts.map((post) => 
              <div key={post.id}>
                <Link to={`/${post.id}`}>
                  <img src={post.body} className="post"></img>
                </Link>
                <Route
                  path={`/${post.id}`}
                  render={() =>
                    <Post post={post} email={this.props.email} username={this.props.username} profileClick={this.props.profileClick} id={post.id} />
                  }
                />
              </div>
            )
          }
        </div> */}
      </div>
    );
  }
}

export default ProfileInfo;