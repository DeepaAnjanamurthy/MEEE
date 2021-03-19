import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Link,
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

const apiUrl = "http://localhost:8080";

class App extends Component {
  state={
    userLoggedIn: false,
    username: '',
    password: ''
  }

  handleChangeName(event) {
    this.setState({username: event.target.value});
  }

  handleChangePwd(event) {
    this.setState({password: event.target.value});
  }

  // Upon clicking login button
  handleLogin(event) {
    event.preventDefault();
    this.postUserData();
    // Does this go here? 
    // sessionStorage.authToken = response.data.token;
    }

  // post request to check for user credentials
  postUserData =() => {
    axios
    .post(`${apiUrl}/users`)
    // .post(`${apiUrl}/login`)
    .then((response) => {
      // console.log(response)
      // console.log(response.data);      
      this.setState({
        username: response.data.username,
        password: response.data.password,
      });
    })
    .catch((error) => console.log(error));
  }


  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div className="mainpage">
              <img className="mainimage" src={chakraImg} alt="seven chakras" />
              <div className="login__container">
                <h2 className="login__form-header">Login to begin</h2>
                {/* <form className="login__form" onSubmit={this.handleSubmit}> */}
                <form className="login__form">
                  <h3 className="login__form-label">User Name</h3>
                  <input
                    className="login__form-uname"
                    type="text"
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={this.handleChangeName}
                  />
                  <h3 className="login__form-label">Password</h3>
                  <input
                    className="login__form-password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChangePwd}
                  />
                  <div className="btns">
                    <button className="login__form-btn cbtn">Cancel</button>
                    <Link to={"/welcome"}>
                      <button className="login__form-btn" onClick={this.handleLogin} >Login</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Route>
          <Route exact path="/welcome" component={Chakras} />
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