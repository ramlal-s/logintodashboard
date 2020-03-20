import React, { Component } from "react";

export default class Sidenav extends Component {
  render() {
    return (
      <div>
        <div className="al-sidebar" id="mySidenav">
          <ul className="al-sidebar-list">
            <li className="al-sidebar-list-item selected">
              <a className="a-style al-sidebar-list-link">
                <i className="fa fa-cogs"></i>
                <span>Dashboard</span>
                {/* <link to="/main" >Dashboard</link> */}
              </a>
            </li>
            <li className="al-sidebar-list-item">
              <a className="a-style al-sidebar-list-link">
                <i className="fa fa-info"></i>
                <span>Operations1</span>
                {/* <link to="/operation" >Operations1</link> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
