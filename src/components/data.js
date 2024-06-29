import {
  ArrowTrendingUpIcon,
  GiftIcon,
  CurrencyRupeeIcon,
  ArrowTrendingDownIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.svg";
import benefitTwoImg from "../../public/img/benefit-two.svg";

const benefitOne = {
  title: "The Hidden Costs Of Smoking [Disadvantages]",
  desc: "Smoking risks health for smokers and non-smokers alike, leading to preventable illness and premature death globally. It causes lung cancer, heart disease, stroke, and COPD, reduces lung capacity, increases infections, and strains finances with ongoing costs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Health Risks",
      desc: "Smoking is linked to lung cancer, heart disease, stroke, and COPD.",
      icon: <HeartIcon />
    },
    {
      title: "Reduced Quality of Life",
      desc: "Smokers often face reduced lung capacity and frequent respiratory infections.",
      icon: <ArrowTrendingDownIcon />,
    },
    {
      title: "Financial Cost",
      desc: "The cost of buying cigarettes adds up, creating a substantial financial burden over time.",
      icon: <CurrencyRupeeIcon />
    },
  ],
};

const benefitTwo = {
  title: "Empowering a Smoke-Free Journey",
  desc: "Our website is committed to helping individuals quit smoking and embark on healthier lifestyles. Through a combination of innovative features and supportive resources, we aim to empower users in their journey towards a smoke-free life.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reward-Based System",
      desc: "Grow a virtual tree daily by reporting smoke-free progress.",
      icon: <GiftIcon />,
    },
    {
      title: "Educational Resources",
      desc: "Access videos, mindfulness exercises, success stories, quizzes on smoking and health, and physical activities.",
      icon: <ArrowTrendingUpIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
