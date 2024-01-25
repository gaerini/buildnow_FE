// ConstructionProgress.tsx
import React from "react";
import * as S from "./style"; // Adjust the path as necessary
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, PieController);
import { Pie } from "react-chartjs-2";

interface ProgressData {
  "민간 관급 비율": { [key: string]: number };
  공종비율: { [key: string]: number };
}

interface ConstructionProgressProps {
  data: ProgressData;
}

// Function to prepare chart data for 민간 관급 비율
const preparePrivatePublicRatioData = (data: { [key: string]: number }) => {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const colors = ["#4A4A4A", "#D7D7D7"]; // Specific colors for 민간 and 관급

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
      },
    ],
  };
};

// Function to prepare chart data for 공종별 비율
const prepareSectorRatioData = (data: { [key: string]: number }) => {
  const sortedEntries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const labels = sortedEntries.map(([key]) => key);
  const values = sortedEntries.map(([, value]) => value);
  const backgroundColors = [
    "#191970",
    "#000080",
    "#0000CD",
    "#0000FF",
    "#4169E1",
    "#6495ED",
    "#1E90FF",
    "#00BFFF",
    "#87CEFA",
  ]; // Colors for top 4

  return {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
      },
    ],
  };
};

const ConstructionProgress: React.FC<ConstructionProgressProps> = ({
  data,
}) => {
  const privatePublicRatioData = preparePrivatePublicRatioData(
    data["민간 관급 비율"]
  );
  const sectorRatioData = prepareSectorRatioData(data["공종비율"]);

  const chartOptions = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        right: 1, // Adjust this value as needed to reduce the space
      },
    },
    plugins: {
      legend: {
        position: "right" as const, // 'right'를 문자열 리터럴 타입으로 지정
        align: "start" as const, // 'start'를 문자열 리터럴 타입으로 지정
        labels: {
          boxWidth: 10,
          padding: 7,
          font: {
            size: 10, // Adjust font size to fit the text
          },
        },
      },
    },
  };

  return (
    <S.TableWrapper>
      {/* Table for 민간 관급 비율 */}
      <S.TableContainer>
        <thead>
          <tr>
            <S.TableHeaderData>민간 관급 비율</S.TableHeaderData>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.TableData>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Pie data={privatePublicRatioData} options={chartOptions} />
              </div>
            </S.TableData>
          </tr>
        </tbody>
      </S.TableContainer>

      {/* Table for 공종별 비율 */}
      <S.TableContainer>
        <thead>
          <tr>
            <S.TableHeaderData>공종별 비율</S.TableHeaderData>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.TableData>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Pie data={sectorRatioData} options={chartOptions} />
              </div>
            </S.TableData>
          </tr>
        </tbody>
      </S.TableContainer>
    </S.TableWrapper>
  );
};

export default ConstructionProgress;
