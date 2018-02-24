import React, { Component } from 'react';

class Content extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        {/* Actual Content, Currently Only Renders Images */}
        <img src={this.props.content.body} height="600" width="600" />
      </div>
    )
  }
}

export default Content;