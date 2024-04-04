import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./MultiplierGraph.css";

function MultiplierGraph({ gameStarted }) {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [
      {
        label: "Multiplier",
        data: [],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  });

  useEffect(() => {
    let interval;
    let freezePoint = Math.floor(Math.random() * 10) + 5;

    if (gameStarted) {
      interval = setInterval(() => {
        setGraphData((prevData) => {
          if (prevData.labels.length === freezePoint) {
            clearInterval(interval);
            return prevData;
          }

          const newLabel = prevData.labels.length + 1;
          const newMultiplierValue = prevData.datasets[0].data.length
            ? parseFloat(
                (
                  prevData.datasets[0].data.slice(-1)[0] +
                  Math.random() * 0.1
                ).toFixed(2)
              )
            : 0.0;

          return {
            labels: [...prevData.labels, newLabel.toString()],
            datasets: [
              {
                ...prevData.datasets[0],
                data: [...prevData.datasets[0].data, newMultiplierValue],
              },
            ],
          };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameStarted]);

  return (
    <div className="MultiplierGraph">
      <h3>Multiplier Graph</h3>
      <div className="GraphPlaceholder">
        <Line
          data={graphData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value) {
                    return value.toFixed(2) + "x";
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}

export default MultiplierGraph;
