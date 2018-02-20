import React, { Component } from 'react';
import Search from './banner/Search.jsx';
import Details from './banner/Details.jsx';


class Banner extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div>
              <div>
                {/* Some Stuff here, logo, etc; Could Do another Component Here if you Want */}
              </div>
              <div>
                <Search />
              </div>
              <div>
                <Details />
              </div>
            </div>
        )
    }
}

export default Banner;