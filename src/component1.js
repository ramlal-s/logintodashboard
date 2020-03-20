import React, { Component } from "react";
import del from "./assets/images/del.svg";
import Piechart from "./chart";

export default class component1 extends Component {
  render() {
    return (
      <div className="container1">
        <div class="row m-rl-0">
          <div col-md-9>
            <div class="row m-rl-0">
              <div class="col-md-3 col-bg">
                <h4 className="h4-t-c m-t-40">123</h4>
                <span className="icon-bg float-right">
                  <img className="float-right" src={del} />
                </span>
                <div className="card1-footer">
                  <h6>text here</h6>
                  <p>sub text</p>
                </div>
              </div>
              <div class="col-md-3 col-bg">
                <h4 className="h4-t-c m-t-40">23</h4>
                <span className="icon-bg float-right">
                  <img className="float-right" src={del} />
                </span>
                <div className="card1-footer">
                  <h6>text here</h6>
                  <p>sub text</p>
                </div>
              </div>
              <div class="col-md-3 col-bg">
                <h4 className="h4-t-c m-t-40">223</h4>
                <span className="icon-bg float-right">
                  <img className="float-right" src={del} />
                </span>
                <div className="card1-footer">
                  <h6>text here</h6>
                  <p>sub text</p>
                </div>
              </div>
              <div class="col-md-3 col-bg">
                <h4 className="h4-t-c m-t-40">39</h4>
                <span className="icon-bg float-right">
                  <img className="float-right" src={del} />
                </span>
                <div className="card1-footer">
                  <h6>text here</h6>
                  <p>sub text</p>
                </div>
              </div>
            </div>
          </div>
          <div col-md-3>
            <Piechart />
          </div>
        </div>
      </div>
    );
  }
}
