// "use client";
// import { useState } from "react";
// import { Container } from "@/components/Container";

// interface VideoProps {
//   videoSrc: string;
// }

// export function Video({ videoSrc }: Readonly<VideoProps>) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Container>
//       <div
//         className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-green-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-green-700"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <video
//           autoPlay
//           loop
//           muted
//           className={`w-full h-full aspect-video ${hovered ? 'opacity-100' : 'opacity-0'}`}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        
//         <div className={`absolute inset-0 flex items-center justify-center ${hovered ? 'opacity-0' : 'opacity-100'}`}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-16 h-16  lg:w-28 lg:h-28"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           <span className="sr-only">Play Video</span>
//         </div>
//       </div>
//     </Container>
//   );
// }


// "use client";
// import { useState } from "react";
// import { Container } from "@/components/Container";

// interface VideoProps {
//   videoSrc: string;
// }

// export function Video({ videoSrc }: Readonly<VideoProps>) {
//   const [playVideo, setPlayVideo] = useState(false);

//   return (
//     <Container>
//       <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-green-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-green-700">
//         {!playVideo && (
//           <button
//             onClick={() => setPlayVideo(true)} // Update state to play video
//             className="absolute inset-0 flex items-center justify-center w-full h-full text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-16 h-16 lg:w-28 lg:h-28"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <span className="sr-only">Play Video</span>
//           </button>
//         )}
//         {playVideo && (
//           <video
//             autoPlay
//             controls
//             className="w-full h-full aspect-video"
//           >
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>
//     </Container>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoSrc: string;
}

export function Video({ videoSrc }: Readonly<VideoProps>) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play();
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-green-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-green-700">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full aspect-video"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Container>
  );
}
