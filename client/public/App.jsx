import React, { Component } from 'react';
import Banner from './components/Banner.jsx';
import View from './components/View.jsx';
import API from './../../config.js';
import Login from './components/views/Login.jsx';
const firebase = require('firebase');

class App extends Component {
    constructor() {
        super();
        this.state = {
            
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillMount() {
        var config = {
            apiKey: API,
            authDomain: "top-shelf-708be.firebaseapp.com",
            databaseURL: "https://top-shelf-708be.firebaseio.com",
            projectId: "top-shelf-708be",
            storageBucket: "top-shelf-708be.appspot.com",
            messagingSenderId: "1039726774762"
            };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((User) => {
            if (User) {
                console.log(User, 'logged in!');
            } else {
                console.log('Logged out!')
            }
        })
    }
    onChangeHandler(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    render() {
        
        return (
            <div>
              {/*Load Login if not logged in  */}
              {/* <Login change={this.onChangeHandler}/> */}
              {/* Otherwise Load Banner and View */}
              <Banner />
              <View />
            </div>
        );
    }
}

export default App;