import Chart from "chart.js/auto";
import { rateLimitMins, hourDay } from "./data";

// Chart.defaults.backgroundColor = "#9BD0F5";
// Chart.defaults.borderColor = "#36A2EB";
// Chart.defaults.color = "#000";

(async function () {
  const ctx = document.getElementById("lineChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: hourDay,
      datasets: [
        {
          label: "Rate Limiting",
          data: rateLimitMins,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#d9d9d9" },
          title: { display: true, text: "Minutes of Rate Limiting" },
        },
        x: {
          grid: { display: false },
          title: { display: true, text: "Date and hour" },
        },
      },
    },
  });
})();
