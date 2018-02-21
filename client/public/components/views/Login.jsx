import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: ''
        }
      
    }
    onClickHandler(e) {

    }

    onChangeHandler(e) {
      
    }
    render() {
        return (
          <div align="center">
            <input type="email" name="email" placeholder="Email" onChange={this.onChangeHandler} />
            <br />
            <input type="password" name="password" placeholder="Password" onChange={this.onChangeHandler} />
            <br />
            <button name="signin" onClick={this.onClickHandler}>Sign In</button><button name="create" onClick={this.onClickHandler}>Create Account</button>
          </div>
        );
    }
}

export default Login;