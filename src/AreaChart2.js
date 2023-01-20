import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};
var dateArr = [];
const today = new Date();
for (let index = 0; index < 30; index++) {
  today.setDate(today.getDate() - 1);
  let dd = today.toLocaleString().split(",")[0];
  dateArr.push(dd);
}

const labels = dateArr;

var dataArr = [];
for (let i = 0; i < 30; i++) {
  const num = Math.random();
  dataArr.push(num * 5);
}

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Last 30 Days",
      data: dataArr,
      borderColor: "rgb(41, 188, 27)",
      backgroundColor: "rgba(41, 188, 27, 0.5)",
    },
  ],
};

const AreaChart2 = () => {
  return <Line options={options} data={data} />;
};

export default AreaChart2;
