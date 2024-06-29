export default function CheckMark({ day }: { day: string }) {
  return (
    <div className="flex flex-col align-center cursor-pointer group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="36px"
        height="36px"
      >
        <path
          // fill="#c8e6c9"
          fill="rgb(22 163 74)"
          d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
        />
        <path
          // fill="#4caf50"
          fill="#fff"
          d="M34.586,14.586l-13.57,13.586l-5.602-5.586l-2.828,2.828l8.434,8.414l16.395-16.414L34.586,14.586z"
        />
      </svg>
      <p className="text-center max-w-2xl text-md leading-normal text-gray-300 lg:text-md xl:text-lg dark:text-gray-300 group-hover:text-gray-500">
        {day}
      </p>
    </div>
  );
}
