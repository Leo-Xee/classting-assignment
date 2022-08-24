import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import * as S from "./DoughnutChart.style";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  win: number;
  lose: number;
  width: string;
};

function Chart({ win, lose, width }: Props) {
  const percent = Math.floor((win / (win + lose)) * 100);

  const data: ChartData<"doughnut"> = {
    datasets: [
      {
        data: [win, lose],
        backgroundColor: ["#00C896", "#fa5252"],
        borderColor: ["#00C896", "#fa5252"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <S.Container
      width={width}
      aria-label={`${percent}% 정답률을 보여주는 원형차트`}
    >
      <S.Percent>{percent}%</S.Percent>
      <Doughnut data={data} />
    </S.Container>
  );
}

export default Chart;
