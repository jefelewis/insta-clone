// Requirements: React
import React from 'react';
import Post from '../Post.jsx';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// Component: ProfileInfo
class ProfileInfo extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container col-md-10" id="details">
          <div className="row">
            <div className="col text-center text-align-center">
              <h4><strong>{this.props.email}</strong></h4>
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <img src={this.props.pic} id="profilepic"></img>
            </div>


            <div className="col">
              <h6><strong>Posts</strong></h6>
              <p>{this.props.posts.length}</p>
            </div>
            
            <div className="col">
              <h6><strong>Followers</strong></h6>
              <p>{this.props.followers}</p>
            </div>
            
            <div className="col">
              <h6><strong>Following</strong></h6>
              <p>{this.props.followings}</p>
            </div>

            <div className="col">
              <button type="button" className="btn btn-primary btn-sm"><a/>Follow</button>
            </div>
          </div>

          <div className="row">
            <h6 className="col text-center">{this.props.bio}</h6>
          </div>
          <div>
            {
              this.props.posts.map((post) => 
                <div key={post.id}>
                  <Link to={`/${post.id}`}>
                    <img src={post.body} />
                  </Link>
                  <Route path={`/${post.id}`} component={Post} />
                </div>
              )
            }
          </div>
      </div>
    );
  }


}
export default ProfileInfo;
