import { Quiz } from "@/types";
import QuizPage from "./QuizPage";
import { useEffect, useState } from "react";

type HomeProps = {
  quizzes: Quiz[];
  setQuizData: (quiz: Quiz) => void;
  stage: number;
};

const Home = ({ quizzes, setQuizData, stage }: HomeProps) => {
  const [view, setView] = useState<"home" | "quiz">("home");
  const [data, setData] = useState<Quiz>();

  const handleSelectedQuiz = (quiz: Quiz) => {
    setQuizData(quiz);
  };

  useEffect(() => {
    console.log(stage);
  }, []);

  return (
    <main className="mx-auto mt-8 text-xl xl:flex xl:w-full xl:items-start xl:px-0 px-10">
      {view === "home" && (
        <>
          <section className="flex flex-col gap-4 xl:w-1/2">
            <h2 className="flex flex-col text-[40px] leading-tight sm:text-[64px]">
              <span className="font-extralight">Welcome to the</span>
              <span className="font-medium">Progress Quiz!</span>
            </h2>
            <h3 className="text-[14px] font-light italic leading-normal text-greyNavy dark:text-lightBluish sm:text-xl">
              progress towards your
              <span className="text-green-600">non-smoking</span> life
            </h3>
          </section>
          <section className="mt-10 flex flex-col gap-3 sm:gap-6 xl:mt-0 xl:w-1/2 xl:items-end">
            {quizzes.map((quiz, index) => {
              return (
                <a
                  key={quiz.title}
                  className={`flex h-16 cursor-pointer items-center gap-4 rounded-xl ${
                    index === stage ? "bg-green-600" : "bg-white"
                  } p-3 drop-shadow-sm transition-all duration-200 ease-in-out hover:opacity-75 dark:bg-navy sm:h-20 sm:gap-8 sm:rounded-3xl xl:h-24 xl:w-[564px] xl:p-5`}
                  onClick={() => {
                    handleSelectedQuiz(quiz);
                    setView("quiz");
                    setData(quiz);
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14 sm:rounded-xl"
                    style={{ backgroundColor: quiz.iconbg }}
                  >
                    <img
                      src={quiz.icon}
                      alt={quiz.title}
                      className="h-7 w-7 sm:h-10 sm:w-10"
                    />
                  </div>

                  <p className="text-lg font-medium sm:text-[28px]">
                    {quiz.title}
                  </p>
                </a>
              );
            })}
          </section>
        </>
      )}
      {view === "quiz" && data && <QuizPage quizData={data} />}
    </main>
  );
};

export default Home;
