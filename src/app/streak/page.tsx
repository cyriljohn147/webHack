"use client";
import { Container } from "@/components/Container";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";
import CheckMark from "@/components/CheckMark";
import Fire from "@/components/Fire";

export default function Streak() {
  return (
    <Container className="flex flex-wrap">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className="streak">
          <div className="flex items-center">
            <Fire className="py-4" />
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                19
              </h2>
              daily streak
            </p>
          </div>
          <div className="flex ">
            <CheckMark />
            <CheckMark />
            <CheckMark />
            <CheckMark />
            <CheckMark />
            <CheckMark />
            <CheckMark />
          </div>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangeCalendar"]}>
              <DemoItem>
                <DateRangeCalendar
                  defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
                  readOnly
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>
    </Container>
  );
}
