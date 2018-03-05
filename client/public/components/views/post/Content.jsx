import React, { Component } from 'react';

class Content extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="contentview">
        {/* Actual Content, Currently Only Renders Images */}
        <img src={this.props.content} height="600" width="600" />
      </div>
    )
  }
}

export default Content;