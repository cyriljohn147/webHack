"use client";
import { Container } from "@/components/Container";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";
import CheckMark from "@/components/CheckMark";
import Fire from "@/components/Fire";
import { useState } from "react";

export default function Streak() {
  const [curDate, setCurDate] = useState<Date>(new Date("2022-06-21"));
  const [stage, setStage] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  const getStreakDate = () => {
    return dayjs(curDate).add(19, "day");
  };

  const handleClick = () => {
    setCurDate(new Date());
    setStreak((prev) => prev + 1);
  };

  return (
    <Container className="flex flex-wrap justify-center">
      <div className="w-1/2 flex justify-center items-center">
        {stage === 0 && <img className="w-1/2" src="treeSapling.svg"></img>}
        {stage === 1 && <img className="w-1/2" src="secondStage.svg"></img>}
        {stage === 2 && <img className="w-1/2" src="thirdStage.svg"></img>}
        {stage === 3 && <img className="w-1/2" src="fourthStage.svg"></img>}
      </div>
      <div className="w-1/2">
        <div className="streak flex flex-col justify-center items-center my-4">
          <div className="container w-fit pb-4">
            <div className="flex items-center">
              <Fire className="pe-4" />
              <p className="max-w-2xl pb-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  19
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
                  defaultValue={[dayjs(curDate), getStreakDate()]}
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
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          onClick={handleClick}
        >
          ADD TO STREAK!
        </button>
      </div>
    </Container>
  );
}
