import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Sidenav from "../navbar/Sidenav";
import Component1 from "../component1";
import Component2 from "../component2";
import Piechart from "../chart";
import cal from "../assets/images/cal.svg";
import search from "../assets/images/search.svg";

// import { ThroughProvider } from "react-through";
// import {Breadcrumbs} from 'react-breadcrumbs-dynamic';
// import { NavLink } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidenav />
        <div className="dashboard">
          <div>
            {/* <Breadcrumbs
          separator={<b> / </b>}
          item={NavLink}
          finalItem={'b'}
          finalProps={{
            style: {color: 'red'}
          }}
        /> */}
            <span className="breadC">Dashboard</span>
            <span className="float-right">
              <span className="search">
                <img src={search} />
              </span>
              <span className="cal">
                <img src={cal} />
              </span>
              <span className="date">10/10/20 - 20/10/20</span>
            </span>
          </div>
          <Component1 />
          <Component2 />
        </div>
      </div>
    );
  }
}
