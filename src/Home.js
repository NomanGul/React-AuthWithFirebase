import React, { Component } from "react";
import fb from "./config/firebase.config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fb.auth().signOut();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={this.logout}
        >
          LogOut
        </button>
      </div>
    );
  }
}
export default Home;
