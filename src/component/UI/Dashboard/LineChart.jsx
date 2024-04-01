import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const LineChart = () => {
  const [GraphData, setGraphData] = useState({
    months: ["January", "February", "March", "April", "May", "June"],
    sum: [10, 15, 20, 18, 25, 30], // Demo data for sum
  });

  return (
    <div className="border rounded-t-xl">
      <h1 className="graph-box bg-gradient-to-b from-teal-400 to-blue-900 py-1 mb-0 text-center text-white">
        Contract Initiation Analysis
      </h1>
      {GraphData?.months ? (
        <Line
          className="chart p-2"
          data={{
            labels: GraphData.months,
            datasets: [
              {
                label: "Contract Initiation",
                data: GraphData.sum,
                backgroundColor: "#56BBF1",
                barThickness: 35,
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
                    color: "#56BBF1",
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

export default LineChart;
