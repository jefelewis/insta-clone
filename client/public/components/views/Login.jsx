import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
      this.state = {};
    }

    render() {
        return (
          <div align="center">
            <input type="email" name="email" placeholder="Email" onChange={this.props.change} />
            <br />
            <input type="password" name="password" placeholder="Password" onChange={this.props.change} />
            <br />
            <button name="signin" onClick={this.props.click}>Sign In</button><button name="create" onClick={this.props.click}>Create Account</button>
          </div>
        );
    }
}

export default Login;