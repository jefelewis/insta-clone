import React, { Component } from 'react';
// import API from './../../../config.js';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: '',
          password: ''
        }
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onClickHandler(e) {
      //Authentication
      
    }

    onChangeHandler(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.state);
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