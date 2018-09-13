import React, { Component } from "react";
import fb from "./config/firebase.config";
import "./App.css";
import Home from "./Home";
import AuthForm from "./AuthForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fb.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  render() {
    const { user } = this.state;
    return <div className="container">{user ? <Home /> : <AuthForm />}</div>;
  }
}

export default App;
