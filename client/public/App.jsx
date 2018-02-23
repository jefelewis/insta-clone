import React, { Component } from 'react';
import Banner from './components/Banner.jsx';
import View from './components/View.jsx';
import API from './config.js';
import Login from './components/views/Login.jsx';
import Profile from './components/views/Profile.jsx';
import firebase from 'firebase';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
<<<<<<< 8217e602b68e818505c1aa07eb5c86f40de3d68a
    constructor() {
        super();
=======
  constructor() {
    super();
>>>>>>> Cleaned Up App.jsx
        this.state = {
            
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

  componentWillMount() {
    var config = {
      apiKey: API.fireBaseApiKey,
      authDomain: 'top-shelf-708be.firebaseapp.com',
      databaseURL: 'https://top-shelf-708be.firebaseio.com',
      projectId: 'top-shelf-708be',
      storageBucket: 'top-shelf-708be.appspot.com',
      messagingSenderId: '1039726774762'
    };

    firebase.initializeApp(config);

<<<<<<< 8217e602b68e818505c1aa07eb5c86f40de3d68a
<<<<<<< f7ccab24bb13ad34990aa91197468eaffbe73a4b
    firebase.auth().onAuthStateChanged((User) => {
=======
<<<<<<< 525ff89b7ab80ac0d7cdf114d7171d39ae1f8b00
    firebase.auth().onAuthStateChanged(User => {
>>>>>>> Fixed Conflicts
      if (User) {
        console.log(User, 'logged in!');
      } else {
        console.log('Logged out!');
      }
    });
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(this.state);
  }
  onClickHandler(e) {
    if (e.target.name === 'signin') {
      const errHandler = firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
      errHandler.catch((e) => console.log(e.message));
    } else {
      const errHandler = firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
<<<<<<< f7ccab24bb13ad34990aa91197468eaffbe73a4b
      errHandler.catch((e) => console.log(e.message));
=======
      errHandler.catch(e => console.log(e.message));
=======
=======
>>>>>>> Cleaned Up App.jsx
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
    onClickHandler(e) {
        if (e.target.name === 'signin') {
            const errHandler = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            errHandler.catch(e => console.log(e.message));
        } else {
            const errHandler = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            errHandler.catch(e => console.log(e.message));
        }
        
    }
<<<<<<< 8217e602b68e818505c1aa07eb5c86f40de3d68a
    render() {
        return (
					<div>
					<Banner />
					<View click={this.onClickHandler} change={this.onChangeHandler}/>
					</div>
        );
>>>>>>> Cleaned Up App.jsx
>>>>>>> Fixed Conflicts
    }
  }
=======
>>>>>>> Cleaned Up App.jsx
  render() {
    return (
      <Router>
        <div>
          <Banner />
          <Switch>
            <Route path="/main" component={View} />
            <Route  path="/login"
              render={props => (
                <Login
                  change={this.onChangeHandler}
                  click={this.onClickHandler}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;