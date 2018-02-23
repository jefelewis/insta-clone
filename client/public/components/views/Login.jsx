import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }

<<<<<<< 19ead8460bf5c450a1dce50c3882c3d76fd5e23e
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
=======
    render() {
        return (
          <div align="center">
            <input type="email" name="email" placeholder="Email" onChange={this.props.change} />
            <br />
            <input type="password" name="password" placeholder="Password" onChange={this.props.change} />
            <br />
            <button name="signin" onClick={this.props.click}>Sign In</button><button name="create" onClick={this.props.click}>Create Account</button><br />
          </div>
        );
    }
>>>>>>> Working Conditional Login Render
}

export default Login;