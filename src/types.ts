export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}

export type Quiz = {
  title: string;
  icon: string;
  iconbg: string;
  questions?: { question: string; options: String[]; answer: string }[];
};

export type Quizzes = Quiz[];

export type Exercise = {
  title: string;
};

export type UserData = {
  id: string;
  email: string;
  password: string;
  dates: unknown;
  streak: number;
  money: number;
  stage: number;
  latestDate: Date;
};

export type UserResponse = {
  message: string;
  type: string;
  data?: UserData | undefined;
};
