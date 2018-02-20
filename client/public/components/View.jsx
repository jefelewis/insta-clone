import React, { Component } from 'react';
import Postlist from './views/Postlist.jsx';
import Profile from './views/Profile.jsx';
import Comments from './views/Profile.jsx';


class View extends Component {
    constructor(){
        super()
    }

    render() {
        return (
          <div>
            <div>
              {/* Need to Handle these loading on certain conditions */}
              <Postlist />
              <Profile />
              <Comments />
            </div>
          </div>
        )
    }
}

export default View;