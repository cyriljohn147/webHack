import {
  ArrowTrendingUpIcon,
  GiftIcon,
  CurrencyRupeeIcon,
  ArrowTrendingDownIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.svg";
import benefitTwoImg from "../../public/img/benefit-two.svg";
import { title } from "process";

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
    // {
    //   title: "Life  Calculator",
    //   desc: "",
    //   icon: ,
    // }
  ],
};

const quizData={
  "quizzes": [
    {
      "title": "Stage 1: Considering Quitting",
      "icon": "/icon-html.svg",
      "iconbg": "#FFF1E9",
      "questions": [
    {
      "question": "Why is smoking harmful to your health?",
      "options": [
        "It improves lung function",
        "It can cause respiratory diseases",
        "It enhances cardiovascular health",
        "It helps with weight loss"
      ],
      "answer": "It can cause respiratory diseases"
    },
    {
      "question": "What are some immediate benefits of quitting smoking?",
      "options": [
        "Improved sense of taste and smell",
        "Increased risk of heart disease",
        "Decreased lung capacity",
        "Increased stress levels"
      ],
      "answer": "Improved sense of taste and smell"
    },
    {
      "question": "What is a common reason people want to quit smoking?",
      "options": [
        "To increase smoking frequency",
        "To improve overall health",
        "To spend more money on cigarettes",
        "To decrease energy levels"
      ],
      "answer": "To improve overall health"
    }
  ]
    },
    {
      "title": "Stage 2: Actively Quitting",
      "icon": "/icon-css.svg",
      "iconbg": "#E0FDEF",
      "questions": [
    {
      "question": "What is a useful strategy for managing cravings?",
      "options": [
        "Ignoring them",
        "Smoking just one cigarette",
        "Using nicotine replacement therapy",
        "Eating unhealthy snacks"
      ],
      "answer": "Using nicotine replacement therapy"
    },
    {
      "question": "What type of support can help with quitting smoking?",
      "options": [
        "Support groups",
        "Isolation",
        "Watching TV",
        "Smoking more"
      ],
      "answer": "Support groups"
    },
    {
      "question": "How can physical activity help when quitting smoking?",
      "options": [
        "It increases cravings",
        "It distracts from cravings",
        "It makes quitting harder",
        "It has no effect"
      ],
      "answer": "It distracts from cravings"
    }
  ]
    },
    {
      "title": "Stage 3: Recently Quit",
      "icon": "/icon-js.svg",
      "iconbg": "#EBF0FF",
      "questions": [
    {
      "question": "What is a common withdrawal symptom after quitting smoking?",
      "options": [
        "Increased energy levels",
        "Decreased appetite",
        "Cravings for nicotine",
        "Better sleep"
      ],
      "answer": "Cravings for nicotine"
    },
    {
      "question": "How long does it typically take for the risk of heart disease to reduce after quitting smoking?",
      "options": [
        "1 week",
        "1 month",
        "1 year",
        "10 years"
      ],
      "answer": "1 year"
    },
    {
      "question": "What can help maintain motivation after quitting smoking?",
      "options": [
        "Setting new health goals",
        "Isolating oneself",
        "Avoiding physical activity",
        "Resuming smoking"
      ],
      "answer": "Setting new health goals"
    }
  ]
    },
    {
      "title": "Stage 4: Long-Term Maintenance",
      "icon": "/icon-accessibility.svg",
      "iconbg": "#F6E7FF",
      "questions": [
    {
      "question": "What should you do if you experience a relapse?",
      "options": [
        "Give up quitting altogether",
        "Recognize it as a learning experience and try again",
        "Increase smoking frequency",
        "Avoid seeking help"
      ],
      "answer": "Recognize it as a learning experience and try again"
    },
    {
      "question": "How can you prevent a relapse?",
      "options": [
        "Identify and avoid triggers",
        "Return to old smoking habits",
        "Isolate yourself from support systems",
        "Ignore cravings"
      ],
      "answer": "Identify and avoid triggers"
    },
    {
      "question": "Why is it important to celebrate milestones in your quit journey?",
      "options": [
        "It discourages further progress",
        "It can reduce motivation",
        "It reinforces positive behavior",
        "It has no impact"
      ],
      "answer": "It reinforces positive behavior"
    }
  ]
    }
  ]
}

const results = {
  "Results": [
    {
      "title": "Stage 1: Considering Quitting",
      "message": [
        "You're starting to learn about the risks of smoking. Keep exploring why quitting is important.",
        "You understand the immediate benefits and common reasons to quit. Keep building on this knowledge.",
        "You grasp the health risks and benefits of quitting. You're ready to take steps toward a smoke-free life."
      ],
      "rewards": [
        "Access to educational resources",
        "Personalized quit plan",
        "10% off coupon for smoking cessation aids"
      ]
    },
    {
      "title": "Stage 2: Actively Quitting",
      "message": [
        "Managing cravings and staying motivated can be challenging. Use our strategies and support resources.",
        "You're effectively handling cravings and staying active. Keep using available support to enhance your journey.",
        "You have a strong strategy for managing cravings and motivation. Keep applying these methods and seeking support."
      ],
      "rewards": [
        "Group therapy sessions",
        "Personalized quit plan with behavioral strategies",
        "20% off voucher for nicotine replacement therapy products"
      ]
    },
    {
      "title": "Stage 3: Recently Quit",
      "message": [
        "Early days can be tough. Focus on managing withdrawal symptoms and staying motivated.",
        "You understand handling withdrawal symptoms and staying motivated. Set new health goals and celebrate progress.",
        "You manage withdrawal well and stay motivated. Enjoy the health benefits of being smoke-free."
      ],
      "rewards": [
        "Individual counseling sessions",
        "$50 gift card for wellness products",
        "Free access to a fitness app for 6 months"
      ]
    },
    {
      "title": "Stage 4: Long-Term Maintenance",
      "message": [
        "Maintaining a smoke-free life can be challenging. Focus on identifying triggers and seeking support.",
        "You're maintaining your smoke-free life well. Identify triggers and celebrate milestones.",
        "You're doing an amazing job! Celebrate milestones and use what you've learned to prevent relapse."
      ],
      "rewards": [
        "Relapse prevention plan",
        "$100 voucher for a wellness retreat",
        "1-year subscription to a meditation app"
      ]
    }
  ]
};



export { benefitOne, benefitTwo ,quizData, results};
