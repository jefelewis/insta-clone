import React, { Component } from 'react';
import Banner from './components/Banner.jsx';
import View from './components/View.jsx';
import API from './config.js';
import Login from './components/views/Login.jsx';
import Profile from './components/views/Profile.jsx';
const firebase = require('firebase');
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ActiveDropdown from 'react-bootstrap-navdropdown-active';


class App extends Component {
    constructor() {
        super();
        this.state = {
            
        }
        // this.componentWillMount = this.componentWillMount.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentWillMount() {
        var config = {
            apiKey: API.fireBaseApiKey,
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
    onClickHandler(e) {
        //TODO: CHECK IF VALID EMAIL
        if (e.target.name === 'signin') {
            const errHandler = firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            errHandler.catch(e => console.log(e.message));
        } else {
            const errHandler = firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            errHandler.catch(e => console.log(e.message));
        }
        
    }
    render() {
        
        return (
            // <div>
            //   {/*Load Login if not logged in  */}
            //   <Login change={this.onChangeHandler} click={this.onClickHandler} />
            //   {/* Otherwise Load Banner and View */}
            //   <Banner />
            //   <View />
            // </div>
            <Router>
                <div>
                <Banner />
                
               
                <ActiveDropdown activeRoutes={['/', '/user', '/login']} baseClassName="dropdown-toggle" title="Profile">
                    <li><Link to="/"> Home </Link></li>
                   
                    <li><Link  to="/user"> User </Link></li>
                    
                    <li><Link to="/login"> Login </Link></li>
                </ActiveDropdown>
                
                <Route path="/user" component={Profile} />
                <Route path="/login" render={(props) => ( <Login change={this.onChangeHandler} click={this.onClickHandler}/> )} />
                <Route exact path="/" component={View} />
                {/* <Login change={this.onChangeHandler} click={this.onClickHandler} /> */}
                <View />
                </div>
            </Router>
        );
    }
}

export default App;