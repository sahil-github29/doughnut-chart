import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js";

class DoughnutChart extends Component {
  state = {};
  render() {
    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
      draw: function() {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart;
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = chart.config.data.text,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2.3;

        ctx.fillText(text, textX, textY);
      }
    });
    const data = {
      labels: ["Red", "Green", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ],
      text: "247"
    };
    const options = {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 10,
          padding: 50
        }
      }
    };

    return (
      <div>
        <h2>React Doughnut with Text Example</h2>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default DoughnutChart;
