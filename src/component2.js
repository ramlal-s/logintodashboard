import React, { Component } from "react";
import ReactPaginate from "react-paginate";

export default class component2 extends Component {
  render() {
    return (
      <div className="container2">
        <h6 className="breadC">FE Performance</h6>
        <table className="table">
          <thead>
            <tr>
              <th className="w-500" scope="col">
                Name
              </th>
              <th scope="col">Del</th>
              <th scope="col">Undel</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>456</td>
              <td>466</td>
              <td>643</td>
              <td>
                <span className="bar-ribbon first">
                  <span></span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>567b</td>
              <td>43</td>
              <td>456</td>
              <td>
                <span className="bar-ribbon first">
                  <span></span>
                </span>
              </td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>645</td>
              <td>456</td>
              <td>346</td>
              <td>
                <span className="bar-ribbon first">
                  <span></span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="float-right">Pagination comes here</p>
      </div>
    );
  }
}
