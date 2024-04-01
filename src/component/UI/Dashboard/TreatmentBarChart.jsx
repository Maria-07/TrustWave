import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const TreatmentBarChart = () => {
  const [GraphData, setGraphData] = useState({
    months: ["January", "February", "March", "April", "May", "June"],
  });

  const dataSet1 = [9];
  const dataSet2 = [5];
  const dataSet3 = [5.08333333333, 0.063333333];
  const dataSet4 = [0, 2.78333333333];

  return (
    <div className="border rounded-t-xl">
      <h1 className="graph-box bg-gradient-to-b from-teal-400 to-blue-900 py-1 mb-0 text-center text-white">
        Contract Status Analysis
      </h1>
      {GraphData?.months ? (
        <Bar
          className="chart p-2"
          data={{
            labels: GraphData.months,
            datasets: [
              {
                label: "Initiated",
                data: dataSet1,
                backgroundColor: "#00A4D6",
                barThickness: 25,
              },
              {
                label: "In Progress",
                data: dataSet2,
                backgroundColor: "#00B88A",
                barThickness: 20,
              },
              {
                label: "Pending",
                data: dataSet3,
                backgroundColor: "#FFAD33",
                barThickness: 20,
              },
              {
                label: "Complete",
                data: dataSet4,
                backgroundColor: "#217FB5",
                barThickness: 20,
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
                    max: 100,
                  },
                },
              ],
            },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TreatmentBarChart;
