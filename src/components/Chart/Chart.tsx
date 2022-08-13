import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import * as S from "./Chart.style";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  result: [number, number];
  width: string;
};

function Chart({ result, width }: Props) {
  const [win, lose] = result;
  const percent = Math.floor((win / (win + lose)) * 100);

  const data: ChartData<"doughnut"> = {
    datasets: [
      {
        data: result,
        backgroundColor: ["#00C896", "#fa5252"],
        borderColor: ["#00C896", "#fa5252"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <S.Container width={width}>
      <S.Percent>{percent}%</S.Percent>
      <Doughnut data={data} />
    </S.Container>
  );
}

export default Chart;
