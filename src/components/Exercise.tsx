// import React from "react";
// import { Container } from "@/components/Container";

// interface ExerciseProps {
//   techniques: {
//     imgPos?: "left" | "right";
//     title: string;
//     desc: string;
//     videoUrl: string;
//     steps: {
//       title: string;
//       desc: string;
//       icon: React.ReactNode;
//     }[];
//   }[];
// }

// export const Exercise = (props: Readonly<ExerciseProps>) => {
//   const { techniques } = props;

//   if (!techniques || !Array.isArray(techniques)) {
//     return <div>No techniques available</div>;
//   }

//   return (
//     <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
//       {techniques.map((technique, index) => (
//         <div
//           key={index}
//           className={`flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ${
//             index % 2 === 1 ? "flex-row-reverse" : ""
//           }`}
//         >
//           <div
//             className={`flex items-center justify-center w-full lg:w-1/2 ${
//               index % 2 === 1 ? "lg:order-1" : ""
//             }`}
//           >
//             <div>
//               <video
//                 width="521"
//                 height="521"
//                 controls
//                 className="object-cover"
//               >
//                 <source src={technique.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <svg
//                 width="800"
//                 height="800"
//                 viewBox="0 0 800 800"
//                 xmlns="http://www.w3.org/2000/svg"
//               ></svg>
//             </div>
//           </div>

//           <div
//             className={`flex flex-wrap items-center w-full lg:w-1/2 ${
//               technique.imgPos === "right" ? "lg:justify-end" : ""
//             }`}
//           >
//             <div>
//               <div className="flex flex-col w-full mt-4">
//                 <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
//                   {technique.title}
//                 </h3>

//                 <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
//                   {technique.desc}
//                 </p>
//               </div>

//               <div className="w-full mt-5">
//                 {technique.steps.map((item, index) => (
//                   <ExerciseStep key={index} title={item.title} icon={item.icon}>
//                     {item.desc}
//                   </ExerciseStep>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Container>
//   );
// };

// function ExerciseStep(props: any) {
//   return (
//     <div className="flex items-start mt-8 space-x-3">
//       <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11 ">
//         {React.cloneElement(props.icon, {
//           className: "w-7 h-7 text-green-50",
//         })}
//       </div>
//       <div>
//         <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//           {props.title}
//         </h4>
//         <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
//       </div>
//     </div>
//   );
// }



import React from "react";
import { Container } from "@/components/Container";
import { Video } from "./Video";

interface ExerciseProps {
  imgPos?: "left" | "right";
  techniques: {
    imgPos?: "left" | "right";
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
  <div>
    <Container className="w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full ${
            techniques[0].videoUrl === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Video videoSrc="videos/Committoquit.mp4" />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full  ${
            techniques[0].imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {techniques[0].title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {techniques[0].desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {techniques[0].steps.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>

<Container className="w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
<div
  className={`flex items-center justify-center w-full ${
    techniques[1].videoUrl === "left" ? "lg:order-1" : ""
  }`}>
  <div>
    <Video videoSrc="videos/Committoquit.mp4" />
  </div>
</div>

<div
  className={`flex flex-wrap items-center w-full  ${
    techniques[1].imgPos === "left" ? "lg:justify-end" : ""
  }`}>
  <div>
    <div className="flex flex-col w-full mt-4">
      <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
      {techniques[1].title}
      </h3>

      <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
      {techniques[1].desc}
      </p>
    </div>

    <div className="w-full mt-5">
      {techniques[1].steps.map((item, index) => (
        <Benefit key={index} title={item.title} icon={item.icon}>
          {item.desc}
        </Benefit>
      ))}
    </div>
  </div>
</div>
</Container>
</div>

    
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
      

// export const Exercise = (props: Readonly<ExerciseProps>) => {
//   const { techniques } = props;

//   if (!techniques || !Array.isArray(techniques)) {
//     return <div>No techniques available</div>;
//   }

//   return (
    // <Container className="w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
    //   {techniques.map((technique, index) => (
    //     <div
    //       key={index}
    //       className={`w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ${
    //         index % 2 === 1 ? "flex-row-reverse" : ""
    //       }`}
    //     >
    //       <div
    //         className={`flex items-center justify-center w-full lg:w-1/2 ${
    //           index % 2 === 1 ? "lg:order-1" : ""
    //         }`}
    //       >
    //         <div>
    //           <video
    //             width="500px"
    //             height="500px"
    //             controls
    //             className="object-cover"
    //           >
    //             <source src={technique.videoUrl} type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>
    //       </div>

    //       <div
    //         className={`w-full flex flex-wrap items-center w-full lg:w-1/2 ${
    //           technique.imgPos === "right" ? "lg:justify-end" : ""
    //         }`}
    //       >
    //         <div>
    //           <div className="w-full flex flex-col w-full mt-4">
    //             <h3 className="w-full max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
    //               {technique.title}
    //             </h3>

    //             <p className="w-0.5 max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
    //               {technique.desc}
    //             </p>
    //           </div>

    //           <div className="w-full mt-5">
    //             {technique.steps.map((item, index) => (
    //               <ExerciseStep key={index} title={item.title} icon={item.icon}>
    //                 {item.desc}
    //               </ExerciseStep>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </Container>
//     <Container className="w-full flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
//       {techniques.map((technique, index) => (
//         <div
//           key={index}
//           className={`flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ${
//             technique.imgPos === "right" ? "flex-row-reverse" : ""
//           }`}
//         >
//           <div
//             className={`flex items-center justify-center w-full lg:w-1/2 ${
//               technique.imgPos === "right" ? "lg:order-1" : ""
//             }`}
//           >
//             <div>
//               <video
//                 width="521"
//                 height="521"
//                 controls
//                 className="object-cover"
//               >
//                 <source src={technique.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           <div
//             className={`flex flex-wrap items-center w-full lg:w-1/2 ${
//               technique.imgPos === "right" ? "lg:justify-end" : ""
//             }`}
//           >
//             <div>
//               <div className="flex flex-col w-full mt-4">
//                 <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
//                   {technique.title}
//                 </h3>

//                 <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
//                   {technique.desc}
//                 </p>
//               </div>

//               <div className="w-full mt-5">
//                 {technique.steps.map((item, index) => (
//                   <ExerciseStep key={index} title={item.title} icon={item.icon}>
//                     {item.desc}
//                   </ExerciseStep>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Container>
//   );
// };

// function ExerciseStep(props: any) {
//   return (
//     <div className="flex items-start mt-8 space-x-3">
//       <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green-500 rounded-md w-11 h-11 ">
//         {React.cloneElement(props.icon, {
//           className: "w-7 h-7 text-green-50",
//         })}
//       </div>
//       <div>
//         <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//           {props.title}
//         </h4>
//         <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
//       </div>
//     </div>
//   );
// }

