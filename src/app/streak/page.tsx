"use client";
import { Container } from "@/components/Container";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";
import CheckMark from "@/components/CheckMark";
import Fire from "@/components/Fire";
import { useEffect, useState } from "react";
import { UserData } from "@/types";
import {
  authenticateUser,
  getUserbyId,
  updateUser,
} from "../../../lib/frontend_functions";

export default function Streak() {
  const [curDate, setCurDate] = useState<Dayjs>(dayjs("2024-06-21") as Dayjs);
  // const [stage, setStage] = useState<number>(0);
  // const [streak, setStreak] = useState<number>(0);

  const user = getUserbyId(JSON.parse(localStorage.getItem("user") || "{}").id);
  const [stage, setStage] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [streakDate, setStreakDate] = useState<Dayjs>(
    dayjs(curDate).add(streak, "day") as Dayjs,
  );

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const user: UserData = await JSON.parse(storedUser);
          if (user) {
            const res = await getUserbyId(user.id);
            res.data && setStreak(res.data.streak);
            res.data && setStage(res.data.stage);
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  // useEffect(() => {
  //   const g = async () => {
  //     const user: UserData = await JSON.parse(
  //       localStorage.getItem("user") || "{}",
  //     );
  //     setStreak(user.streak);
  //     console.log(user.streak, streak);
  //     // setStage(user.stage);
  //   };
  //   g();
  // }, []);
  useEffect(() => {
    console.log(curDate.toString(), streakDate.toString());
    console.log(streak);
    setStreakDate(dayjs(curDate).add(streak, "day"));
  }, [streak]);

  // useEffect(() => {
  //   const g = async () => {
  //     try {
  //       const storedUser = localStorage.getItem("user");
  //       if (storedUser) {
  //         const user = await JSON.parse(storedUser);
  //         if (user && user.streak !== undefined) {
  //           setStreak(user.streak);
  //           console.log(user.streak, streak);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error parsing user data from localStorage:", error);
  //     }
  //   };
  //   g();
  // }, []);

  const getStreakDate = () => {
    return dayjs(curDate).add(streak, "day");
  };

  const handleClick = async () => {
    const newStreak = streak + 1;
    const newStage = newStreak % 30 === 0 ? stage + 1 : stage;
    const storedUser = localStorage.getItem("user");
    const userID = storedUser && JSON.parse(storedUser).id;
    try {
      const res = await updateUser(
        { streak: newStreak, stage: newStage },
        userID,
      );
      console.log(res);
      const updatedUser = await getUserbyId(userID);
      console.log(updatedUser.data?.streak);
    } catch (error) {
      console.error("Error updating user:", error);
    }
    setStreak(newStreak);
    setStage(newStage);
  };

  return (
    <Container className="flex flex-wrap justify-center">
      <div className="w-1/2 flex justify-center items-center">
        {stage === 1 && <img className="w-1/2" src="treeSapling.svg"></img>}
        {stage === 2 && <img className="w-1/2" src="secondStage.svg"></img>}
        {stage === 3 && <img className="w-1/2" src="thirdStage.svg"></img>}
        {stage === 4 && <img className="w-1/2" src="fourthStage.svg"></img>}
      </div>
      <div className="w-1/2">
        <div className="streak flex flex-col justify-center items-center my-4">
          <div className="container w-fit pb-4">
            <div className="flex items-center">
              <Fire className="pe-4" />
              <p className="max-w-2xl pb-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {streak}
                </h2>
                daily streak
              </p>
            </div>
            <div className="flex gap-x-2">
              <CheckMark day="M" type="done" />
              <CheckMark day="T" type="done" />
              <CheckMark day="W" type="done" />
              <CheckMark day="T" type="missed" />
              <CheckMark day="F" type="done" />
              <CheckMark day="S" type="tbd" />
              <CheckMark day="S" type="tbd" />
            </div>
          </div>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangeCalendar"]}>
              <DemoItem>
                <DateRangeCalendar
                  value={[dayjs(curDate), streakDate]}
                  readOnly
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none my-4"
          onClick={handleClick}
          disabled={streakDate.isAfter(dayjs())}
        >
          {streakDate.isAfter(dayjs())
            ? "TOO EARLY! COME AGAIN TOMORROW"
            : "ADD TO STREAK!"}
        </button>
      </div>
    </Container>
  );
}
