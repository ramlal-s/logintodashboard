import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import user from "../assets/images/user.svg";
import logo from "../assets/images/logo.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const options = ["one", "two", "three"];
    const defaultOption = options[0];
    return (
      <div className="navbar navbar-light bg-light justify-content-between">
        {/* <i
          className="fa fa-bars fa-custom-bar"
          aria-hidden="true"
          onclick="openNav()"
        ></i> */}
        <a class="navbar-brand ml-4">
          <img src={logo} />
        </a>
        <div className="user-profile clearfix">
          <div className="al-user-profile">
            <a className="a-style profile-toggle-link">
              <img className="img-style" src={user} />
            </a>
          </div>
        </div>
        <Dropdown
          className="float-right"
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    );
  }
}
export default Navbar;
