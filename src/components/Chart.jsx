import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { colorArray } from "../Constants/ColorArray";
import { Bar, Line } from "react-chartjs-2";
import useSales from "../Hooks/useSales";
import { events } from "../DataBase/Events";
function Chart() {
  const [sales] = useSales();

  const price = [];
  const price1 = [];
  const id = [];
  events?.forEach((element) => {
    price1.push(element.eventCount);
    id.push(element.evntName);
  });
  const nums = [5, 2, 7, 3];
  price.push(nums);

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: id,
    datasets: [
      {
        label: false,
        data: price1,
        // borderColor: "black",
        backgroundColor: colorArray,
        borderWidth: 1,
      },
    ],
    style: {
      width: "200px",
    },
  };
  const options = {};

  return (
    <div style={{ width: "80%", margin: "100px auto" }}>
      {sales?.length <= 0 ? (
        <p>No sales have been made</p>
      ) : (
        <Bar data={data} style={{ width: "200px", height: "900px" }} />
      )}
    </div>
  );
}

export default Chart;
