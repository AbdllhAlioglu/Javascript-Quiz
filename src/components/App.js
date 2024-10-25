import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import FinishButton from "./FinishButton";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const initialState = {
  questions: [],
  status: "loading", // loading , ready , active , error , finished
  index: 0,
  point: 0,
  answer: null,
  timeRemaining: 300,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "setAnswer":
      return { ...state, answer: action.payload };
    case "updatePoints":
      const updatedPoint = state.point + action.payload;
      return {
        ...state,
        point: updatedPoint,
      };
    case "finishQuiz":
      return { ...state, status: "finished" };
    case "restartQuiz":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "start":
      return { ...state, status: "active", timeRemaining: 300 };
    case "tick":
      return { ...state, timeRemaining: state.timeRemaining - 1 };
    case "timeUp":
      return { ...state, status: "finished" };
    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [{ questions, status, index, point, answer, timeRemaining }, dispatch] =
    useReducer(reducer, initialState);
  const count = questions.length;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/AbdllhAlioglu/quiz-data/refs/heads/main/public/data/questions.json"
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  useEffect(() => {
    if (status === "active" && timeRemaining > 0) {
      const timerId = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      if (timeRemaining === 0) {
        dispatch({ type: "timeUp" });
      }

      return () => clearInterval(timerId);
    }
  }, [status, timeRemaining]);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen count={count} dispatch={dispatch} />
        )}
        {status === "finished" && (
          <FinishScreen
            point={point}
            questions={questions}
            dispatch={dispatch}
          />
        )}

        {status === "active" && (
          <>
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
              point={point}
              questions={questions}
              index={index}
              timeRemaining={timeRemaining}
            />
            <Timer timeRemaining={timeRemaining} />
            {timeRemaining === 0 || index === questions.length - 1 ? (
              <FinishButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                timeRemaining={timeRemaining}
              />
            ) : (
              <NextButton
                dispatch={dispatch}
                answer={answer}
                timeRemaining={timeRemaining}
              />
            )}
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
