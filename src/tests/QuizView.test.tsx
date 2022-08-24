import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Quiz } from "api";
import QuizView from "@/components/QuizView";
import useOptionStore from "@/hooks/useOptionStore";

const quiz: Quiz[] = [
  {
    category: "Entertainment: Television",
    question:
      "Which of the following awards do Matt Stone and Trey Parker NOT have?",
    correctAnswer: "Oscar",
    selectedAnswer: null,
    choices: ["Oscar", "Emmy", "Tony", "Grammy"],
  },
];

describe("<QuizView />", () => {
  beforeEach(() => {
    const state = useOptionStore.getState();
    state.setQuizzes(quiz);
  });

  it("기본 엘리먼트들을 보여준다.", () => {
    render(<QuizView />);

    const progressBar = screen.getByLabelText(/퀴즈 진행상태/);
    const question = screen.getByLabelText(/퀴즈 문제/);
    const choices = screen.getAllByRole("listitem");
    const button = screen.getByRole("button", { name: /다음 문제/ });

    expect(progressBar).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(choices).toHaveLength(4);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("퀴즈의 선택지를 클릭하면 버튼이 활성화된다.", async () => {
    render(<QuizView />);

    const choiceButton = screen.getByRole("button", { name: /Oscar/ });
    fireEvent.click(choiceButton);

    const nextButton = await screen.findByRole("button", { name: /다음 문제/ });
    expect(nextButton).not.toBeDisabled();
  });
});
