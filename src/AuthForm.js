import React, { Component } from "react";
import fb from "./config/firebase.config";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fb.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fb.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <form className="mt-5 col-md-5">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={this.handleChange}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            className="form-control"
            value={this.state.password}
            placeholder="Password"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your password with anyone else.
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-primary mr-5"
          onClick={this.login}
        >
          LogIn
        </button>
        <button type="submit" className="btn btn-primary" onClick={this.signup}>
          SignUp
        </button>
      </form>
    );
  }
}

export default AuthForm;
