import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = () => {
  const [GraphData, setGraphData] = useState({
    months: ["January", "February", "March", "April", "May", "June"],
    sum: [
      [10, 20, 30, 40, 50, 60], // Total
      [5, 10, 15, 20, 25, 30], // Rendered
    ],
  });

  return (
    <div className="bar border rounded-t-xl">
      <h1 className="graph-box bg-gradient-to-b from-teal-400 to-blue-900 py-1 mb-0 text-center text-white">
        Contract Initiated Vs Completed
      </h1>
      {GraphData?.months ? (
        <Bar
          className="chart p-2"
          data={{
            labels: GraphData.months,
            datasets: [
              {
                label: "Initiated",
                data: GraphData.sum[0],
                backgroundColor: "#56BBF1",
                barThickness: 25,
              },
              {
                label: "Completed",
                data: GraphData.sum[1],
                backgroundColor: "#6CC4A1",
                barThickness: 25,
              },
            ],
          }}
          options={{
            tooltips: {
              mode: "index",
              callbacks: {
                label: function (toolTipItem) {
                  return "Revenue: $" + toolTipItem.value;
                },
              },
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "cyan",
                  },
                  scaleLabel: {
                    labelString: "Months",
                    display: true,
                    fontColor: "blue",
                    fontSize: 20,
                  },
                  ticks: {
                    fontColor: "green",
                  },
                },
              ],
              yAxes: [
                {
                  suggestedMax: 10000,
                  gridLines: {
                    color: "cyan",
                  },
                  scaleLabel: {
                    labelString: "Revenue",
                    display: true,
                    fontColor: "blue",
                    fontSize: 20,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: "green",
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChart;
