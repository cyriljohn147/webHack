"use client";
import { Container } from "@/components/Container";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import dayjs, { Dayjs } from "dayjs";

export default function Streak() {
  return (
    <Container className="flex flex-wrap">
      <div className="w-1/2"></div>
      <div className="w-1/2">
        <div className=" bg-green">
          <p>daily streak</p>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DateRangeCalendar", "DateRangeCalendar"]}
            >
              <DemoItem label="Your Streak">
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
