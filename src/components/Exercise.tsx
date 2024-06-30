import React from "react";
import { Container } from "@/components/Container";
import { Video } from "./Video";

interface ExerciseProps {
  techniques: {
    imgPos?: string;
    title: string;
    desc: string;
    videoUrl: string;
    steps: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  }[];
}

export const Exercise = (props: Readonly<ExerciseProps>) => {
  const { techniques } = props;
  return (
    <Container className="w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap flex-col">
      {techniques.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full gap-5 ${
            item.imgPos === "left" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className={`w-full lg:w-1/2 flex justify-center items-center`}>
            <div>
              <Video videoSrc={item.videoUrl} />
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start`}
          >
            <div className="max-w-2xl">
              <h3 className=" text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white">
                {item.title}
              </h3>

              <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {item.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {item.steps.map((step, stepIndex) => (
                <Benefit key={stepIndex} title={step.title} icon={step.icon}>
                  {step.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-green-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
