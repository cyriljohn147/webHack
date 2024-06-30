"use client";
import { useState, useEffect } from "react";
import { Quizzes, Quiz } from "@/types";
import Home from "@/components/Home";
import QuizNavbar from "@/components/Quiznav";
import { quizData } from "@/components/data";
import { UserData } from "@/types";
import { getUserbyId } from "../../../lib/frontend_functions";

function App() {
  const quizzes: Quizzes = quizData.quizzes;
  const [data, setQuizData] = useState<Quiz>({
    title: "Healthy lifestyle is a choice!",
    icon: "/treeSapling.svg",
    iconbg: "#fne4bc",
  });
  const [stage, setStage] = useState<number>(0);
  const userID = JSON.parse(window.localStorage.getItem("user") || "{}");

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const user: UserData = await JSON.parse(storedUser);
          if (user) {
            const res = await getUserbyId(user.id);
            res.data && setStage(res.data.stage);
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className="mx-auto min-h-screen w-[375px] max-w-[1440px] scroll-smooth bg-lightGrey bg-backgroundMobileLight bg-cover text-darkNavy dark:bg-darkNavy dark:bg-backgroundMobileDark dark:text-white sm:w-full sm:bg-backgroundTabletLight dark:sm:bg-backgroundTabletDark md:max-w-[768px] lg:bg-backgroundDesktopLight dark:lg:bg-backgroundDesktopDark xl:max-w-[1160px]">
        <QuizNavbar title={data.title} icon={data.icon} iconbg={data.iconbg} />
        <Home quizzes={quizzes} setQuizData={setQuizData} stage={stage} />
      </div>
    </>
  );
}

export default App;
