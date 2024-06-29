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

const results={
  "Results" : [
    {
      "title": "Stage 1: Considering Quitting",
      "message": [
        "It looks like you're just starting to learn about the risks of smoking. Keep exploring the resources we offer to understand why quitting is so important for your health.",
        "Great job! You have a good understanding of the immediate benefits and common reasons to quit smoking. Keep building on this knowledge to strengthen your commitment to quit.",
        "Excellent! You have a solid grasp of the health risks and benefits of quitting smoking. You're well-prepared to take the next steps toward a smoke-free life."
      ]
    },
    {
      "title": "Stage 2: Actively Quitting",
      "message": [
        "It seems you're finding it challenging to manage cravings and stay motivated. Consider using more of our strategies and support resources to help you through this stage.",
        "Good work! You're using effective strategies to handle cravings and stay active. Keep utilizing the support systems available to you to enhance your quitting journey.",
        "Fantastic! You have a strong strategy for managing cravings and staying motivated. Continue to apply these methods and reach out for support whenever needed."
      ]
    },
    {
      "title": "Stage 3: Recently Quit",
      "message": [
        "The early days can be tough, but don't get discouraged. Focus on the resources we offer to manage withdrawal symptoms and maintain your motivation.",
        "You're doing well in understanding how to handle withdrawal symptoms and stay motivated. Keep setting new health goals and celebrating your progress.",
        "Excellent job! You have a good understanding of managing withdrawal and staying motivated. Keep up the great work and enjoy the health benefits of being smoke-free."
      ]
    },
    {
      "title": "Stage 4: Long-Term Maintenance",
      "message": [
        "Long-term maintenance can be challenging. Focus on identifying triggers and seeking support to stay on track. Remember, setbacks are part of the journey.",
        "You're on the right path to maintaining your smoke-free life. Keep identifying triggers and celebrating your milestones to stay motivated.",
        "You're doing an amazing job maintaining your smoke-free life! Continue to celebrate your milestones and use what you've learned to prevent relapse."
      ]
    }
    
  ]
}

export { benefitOne, benefitTwo ,quizData};
