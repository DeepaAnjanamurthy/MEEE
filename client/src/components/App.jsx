// TO DO:
// 1. Complete login implementation
// 2. Form validation implemetation

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from 'axios';
import "./App.scss";

import chakraImg from "../assets/images/sevenchakras.png";
import Meditate from "./Meditate/Meditate";
import Meditatechakra from "./Meditate/Meditatechakra";
import Navbar from "./Appnav/Navbar";
import Chakras from "./Chakras/Chakras";
import Viewprogress from './ViewProgress/Viewprogress';

const apiUrl = "http://localhost:8080";

class App extends Component {
  state={
    userLoggedIn: false,
    username: '',
    password: ''
  }

  handleChangeName = (event) => {
    this.setState({username: event.target.value});
  }

  handleChangePwd = (event) => {
    this.setState({password: event.target.value});
  }

  // Upon clicking login button
  handleLogin = (event) => {
    event.preventDefault();
    // form validation for empty username and password fields
    this.postUserData();
  }
  

  // post request to check for user credentials
  postUserData = () => {
    axios
    .post(`${apiUrl}/userAuth/login`, 
      {
        username: this.state.username,
        password: this.state.password
      }
    )
    .then((response) => {
      sessionStorage.authToken = response.data.token;
      // console.log(response)
      // console.log(response.data);      
      this.setState({
        userLoggedIn: true
      });
    })
    .catch((error) => console.log(error));
  }

  handleSignOut =() => {
    sessionStorage.clear();
    this.setState({
      userLoggedIn: false,
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <Router>
        {/* Send username, LoggedIn flag to Navbar Component */}
        <Navbar 
         userLoggedIn={this.state.userLoggedIn}
         handleSignOut={this.handleSignOut}
        />
        <Switch>
          <Route path="/" exact>
            {this.state.userLoggedIn 
                ? <Chakras 
                    username={this.state.username}           
                  />
                : (
            <div className="mainpage">
              <img className="mainimage" src={chakraImg} alt="seven chakras" />
              <div className="login__container">
                <h2 className="login__form-header">Login to Begin</h2>
                {/* <form className="login__form" onSubmit={this.handleSubmit}> */}
                  <form className="login__form" onSubmit={this.handleLogin}>
                    <h3 className="login__form-label">User Name</h3>
                    <input
                      className="login__form-uname"
                      type="text"
                      name="username"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.handleChangeName}
                    />
                    <h3 className="login__form-label">Password</h3>
                    <input
                      className="login__form-password"
                      type="password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handleChangePwd}
                    />
                    <div className="btns">
                      <button className="login__form-btn cbtn">Cancel</button>
                      {/* <Link to={"/welcome"}> */}
                        <button className="login__form-btn" type="submit">Login</button>
                      {/* </Link> */}
                    </div>
                  </form>
              </div>
            </div>
          )}
          </Route>
          {/* <Route exact path="/welcome" component={Chakras} /> */}
          <Route path="/viewprogress" component={Viewprogress} />
          <Route path="/meditatechakra/:id/:id" component={Meditatechakra} />
          <Route path="/chakra/:id" component={Meditate} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;