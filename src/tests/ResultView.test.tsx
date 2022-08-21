/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Quiz } from "api";
import useQuizStore from "@/hooks/useQuizStore";
import ResultView from "@/components/ResultView";
import useOptionStore from "@/hooks/useOptionStore";

const quiz: Quiz[] = [
  {
    category: "Entertainment: Television",
    question:
      "Which of the following awards do Matt Stone and Trey Parker NOT have?",
    correct_answer: "Oscar",
    selected_answer: null,
    choices: ["Oscar", "Emmy", "Tony", "Grammy"],
  },
];

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("<ResultView />", () => {
  beforeEach(() => {
    const quizState = useQuizStore.getState();
    const optionState = useOptionStore.getState();
    optionState.setQuizzes(quiz);
    optionState.setAnswer(0, "Oscar");
    quizState.setStartTime(1660562569209);
    quizState.setEndTime(1660562582887);
  });

  it("기본 엘리먼트들을 보여준다.", () => {
    render(<ResultView />);

    const heading = screen.getByRole("heading", { name: /퀴즈 결과/ });
    const correctQuiz = screen.getByText(/1개/);
    const incorrectQuiz = screen.getByText(/0개/);
    const duration = screen.getByText(/13.7초/);
    const chart = screen.getByLabelText(/% 정답률을 보여주는 원형차트/);
    const buttons = screen.getAllByRole("button");

    expect(heading).toBeInTheDocument();
    expect(correctQuiz).toBeInTheDocument();
    expect(incorrectQuiz).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
    expect(chart).toBeInTheDocument();
    expect(buttons).toHaveLength(3);
  });
});
