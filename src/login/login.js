import React, { Component } from "react";
import HttpClient from "axios";
import { Redirect } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
  }
  updateState = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  doLogin = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    let _data = {
      username: email,
      password: password
    };
    console.log("data:", _data.email + _data.password);
    HttpClient({
      url: "http://52.76.240.170/login",
      method: "POST",
      data: _data
    })
      .then(res => {
        if (res.data.access_token != undefined) {
          localStorage.setItem("cubiToken", res.data.access_token);
          this.setState({ redirect: true });
        }
      })
      .catch(e => {
        console.error("error:", e.message);
      });
  };
  render() {
    console.log("check:", this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to="/main" />;
    }
    return (
      <div className="cover-img">
        <div className="login-panel">
          <div className="panel-area">
            <div className="heading1">
              welcome to
              <img src={logo} />
            </div>
            <p class="p-text">
              We make easy for every one to make manage
              <br /> logistics operations
            </p>
            <div class="form-area">
              <form onSubmit={this.doLogin}>
                <div className="form-group">
                  <label className="m-b-4 label-clr" for="inputEmail1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.updateState}
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label className="m-b-4 label-clr" for="inputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.updateState}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label m-t-3 clr-6e"
                    for="exampleCheck1"
                  >
                    Remember me
                  </label>
                  <a
                    className="form-check-label m-t-3 label-clr m-l-149"
                    href="#"
                  >
                    Forget password
                  </a>
                </div>
                <button type="submit" class="btn btn-login white">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
