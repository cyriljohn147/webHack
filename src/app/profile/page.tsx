"use client";

import { Container } from "@/components/Container";
import { useState, useEffect } from "react";
import {
  FireIcon,
  BanknotesIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Profile() {
  const [perc, setPerc] = useState(0);
  const baseFactor = 0.5; // Example base factor (hypothetical)
  const exponentialGrowthRate = 0.05; // Example exponential growth rate (5% per year)
  const yearsOfSmoking = 20; // Example years of smoking
  const cigarettesPerDay = 10; // Example cigarettes per day

  function calculateLifeExpectancyReduction(
    baseFactor: number,
    exponentialGrowthRate: number,
    yearsOfSmoking: number,
    cigarettesPerDay: number
  ) {
    const lifeExpectancyReduction =
      baseFactor *
      Math.pow(1 + exponentialGrowthRate, yearsOfSmoking) *
      cigarettesPerDay;

    setPerc(lifeExpectancyReduction);
  }

  return (
    <div>
      <Container className="justify-around flex flex-col items-center height">
        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden w-full flex ">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  Jane Doe
                </h3>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                  <svg
                    className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      className=""
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  Boduppal , HYD
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex items-center px-5 pb-10">
              <ChartBarIcon
                width={100}
                height={100}
                className="text-yellow-500"
              />
              <div>
                <p className="text-5xl bold">1</p>
                <p>Stage</p>
              </div>
            </div>
            <div className="flex items-center px-5 pb-10">
              <FireIcon width={100} height={100} className="text-red-500" />
              <div>
                <p className="text-5xl bold">19</p>
                <p>daily streak</p>
              </div>
            </div>
            <div className="flex items-center px-5 pb-10">
              <BanknotesIcon
                width={100}
                height={100}
                className="text-green-800"
              />
              <div>
                <p className="text-5xl bold">190</p>
                <p>Money Saved</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div className="w-1/4 h-80 flex *: justify-around items-center rounded px-5">
            <div>
              <form
                className="flex flex-col"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  calculateLifeExpectancyReduction(
                    baseFactor,
                    exponentialGrowthRate,
                    yearsOfSmoking,
                    parseInt(e.target.intake.value)
                  );
                }}
              >
                <div className="mt-10">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Enter your Daily intake:
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <input
                          type="text"
                          name="intake"
                          id="intake"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center px-5  justify-center gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth={10}
                  cx={50}
                  cy={50}
                  r={40}
                  fill="transparent"
                />
                {/* Progress circle */}
                <circle
                  className="text-green-600  progress-ring__circle stroke-current"
                  strokeWidth={10}
                  strokeLinecap="round"
                  cx={50}
                  cy={50}
                  r={40}
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset={`calc(251.2 - (251.2 * ${perc}) / 100)`}
                />
                {/* Center text */}
                <text
                  x={50}
                  y={50}
                  fontFamily="Verdana"
                  fontSize={12}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  {perc.toFixed(2)}%
                </text>
              </svg>
            </div>
          </div>
          <div className="w-1/4 h-80 rounded bg-green-600 flex items-center justify-center px-5">
            <p className="italic text-white text-center">
              Non-smokers exposed to secondhand smoke have a 20-30% higher risk
              of developing lung cancer. Since lung cancer is one of the most
              deadly forms of cancer, this increased risk translates to a
              significant impact on mortality and life expectancy.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
