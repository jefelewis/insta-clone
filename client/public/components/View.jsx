import React, { Component } from 'react';
import Postlist from './views/Postlist.jsx';
import Profile from './views/Profile.jsx';
import Comments from './views/Comments.jsx';
import Login from './views/Login.jsx';

class View extends Component {
<<<<<<< 19ead8460bf5c450a1dce50c3882c3d76fd5e23e
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>
          {/* Need to Handle these loading on certain conditions */}
          <Postlist />
          {/* <Profile /> */}
          <Login click={this.props.click} change={this.props.change}/>
          <Comments />
        </div>
      </div>
    );
  }
=======
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <div>
              {/* Need to Handle these loading on certain conditions */}
              <Postlist />
              { this.props.active ? null : <Login click={this.props.click} change={this.props.change}/>}
              
              {/* <Profile /> */}
              <Comments />
            </div>
          </div>
        );
    }
>>>>>>> Working Conditional Login Render
}

export default View;