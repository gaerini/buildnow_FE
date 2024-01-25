import React from "react";
import { Line } from "react-chartjs-2";
import * as S from "./style";
import * as C from "../CommonStyle";
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

interface FinancialRatio {
  [year: string]: number;
}

interface MiddleSizeTableProps {
  data: FinancialRatio;
  name: string;
}

const MiddleSizeTable: React.FC<MiddleSizeTableProps> = ({ name, data }) => {
  // Convert the data into a format that can be used with Chart.js
  const labels = Object.keys(data); // Chart.js needs an array of labels
  const values = labels.map((label) => data[label]); // Corresponding values for each label

  // Create the data object for the chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: name,
        data: values,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // Chart options
  // Chart options
  const options = {
    devicePixelRatio: 5,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 22.5, // Left margin
        right: 22.5, // Right margin
        top: 15,
        bottom: 15,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkipPadding: 15, // Optional: additional padding for the x-axis ticks if needed
          maxRotation: 0, // Optional: to ensure the labels are not rotated
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true, // Optional: if you want the y-axis to start at zero
        ticks: {
          autoSkipPadding: 15, // Optional: additional padding for the y-axis ticks if needed
        },
      },
    },
  };

  return (
    <C.IndividualTableComponent>
      <S.TableHeader>
        <S.HeaderSquare />
        {name}
      </S.TableHeader>
      <S.MiddleTableWrapper>
        {/* Render the line chart here */}
        <Line data={chartData} options={options} />
      </S.MiddleTableWrapper>
    </C.IndividualTableComponent>
  );
};

export default MiddleSizeTable;
