// import { Quiz } from "../../types";

import { useEffect } from "react";

type NavbarProps = {
  title: string;
  icon: string;
  iconbg: string;
};

export default function QuizNavbar({ title, icon, iconbg }: NavbarProps) {
  return (
    <nav className="flex h-[72px] items-center justify-between px-6 sm:p-16 xl:w-full xl:px-0 xl:py-20">
      {title && icon && iconbg ? (
        <section className="flex items-center justify-start gap-4 sm:gap-6">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14"
            style={{ backgroundColor: iconbg }}
          >
            <img src={icon} alt={title} className="h-7 w-7 sm:h-10 sm:w-10" />
          </div>
          <h1 className="text-[18px] font-medium sm:text-[28px]">{title}</h1>
        </section>
      ) : (
        <section className=""></section>
      )}
    </nav>
  );
}
