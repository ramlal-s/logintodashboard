import React, { Component } from "react";
import { Doughnut, Bar, Line, Pie } from "react-chartjs-2";

export default class chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieChartData: {
        // labels: [ Yellow, "02", "03", "04", "05", "06"],
        datasets: [
          {
            label: "X",
            data: [12, 19, 3],
            backgroundColor: ["#fad37b", "#86d5a2", "#ea8972"],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }
  render() {
    return (
      <div>
        <Pie
          data={this.state.pieChartData}
          //   options={{ maintainAspectRatio: true }}
        />
      </div>
    );
  }
}
