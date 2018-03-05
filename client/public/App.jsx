import React, { Component } from 'react';
import Banner from './components/Banner.jsx';
import View from './components/View.jsx';
import API from './config.js';
import Login from './components/views/Login.jsx';
import Profile from './components/views/Profile.jsx';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
// import dummy from './dummy.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      active: true,
      render: 'Postlist',
      email: ''
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.userClickHandler = this.userClickHandler.bind(this);
  }

  componentWillMount() {
    var postsArray = [];

    var config = {
      apiKey: API.fireBaseApiKey,
      authDomain: 'top-shelf-708be.firebaseapp.com',
      databaseURL: 'https://top-shelf-708be.firebaseio.com',
      projectId: 'top-shelf-708be',
      storageBucket: 'top-shelf-708be.appspot.com',
      messagingSenderId: '1039726774762'
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((User) => {
      if (User) {
        console.log(User.email, 'logged in!');
        this.setState({
          render: 'Postlist',
          active: true
        });
      } else {
        console.log('Logged out!');

        this.setState({
          render: 'Login',
          active: false
        });
      }
    });

    // this.setState({
    //   data: dummy
    // });

    axios.get('/api/users')
    .then(({data})=> {
      this.setState({
        users: data
      })
      data.forEach((user) => {
        axios.get('/api/post', {params: {username: user.username}})
          .then((posts) => {
            postsArray = postsArray.concat(posts.data);
            this.setState({
              posts: postsArray
            });
          })
      });

    })
    .catch(()=> {
      console.log('I am a failure')
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
      errHandler.catch((e) => console.log(e.message));
    } else if (e.target.name === 'create') {
      const errHandler = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      axios.post('/api/user', {
        username: this.state.email,
        bio: 'Enter your bio here.',
        profile_picture: 'https://pvrinstitute.org/handlers/profileimagehandler.ashx?id=5262'
      })
        .then(() => {
          console.log('success');
        })
        .catch(() => {
          console.log('error');
        });
      errHandler.catch((e) => console.log(e.message));
    } else if (e.target.name === 'logout') {
      const errHandler = firebase.auth().signOut();
      errHandler.catch((e) => console.log(e.message));
    }
  }

  userClickHandler(e, user) {
    this.setState({
      render: 'Profile'
    });
  }

  render() {
    return (
      <Router>
        <div>

          <Banner active={this.state.active} click={this.onClickHandler} userClickHandler={this.userClickHandler} />
          <div className="space"></div>
          <View
            posts={this.state.posts}
            users={this.state.users}
            click={this.onClickHandler}
            change={this.onChangeHandler}
            active={this.state.active}
            render={this.state.render}
            userClickHandler={this.userClickHandler}
            email={this.state.email}
          />
          <Add email={this.state.email} firebase={firebase} />
          <Banner active={this.state.active} click={this.onClickHandler} />
          <View click={this.onClickHandler} change={this.onChangeHandler} active={this.state.active}/>
        </div>
      </Router>
    );
  }
}

export default App;