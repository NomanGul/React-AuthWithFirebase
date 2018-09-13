import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <form className="mt-5 col-md-5">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small>
          </div>
          <button type="submit" class="btn btn-primary mr-5">
            LogIn
          </button>
          <button type="submit" class="btn btn-primary">
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default App;
