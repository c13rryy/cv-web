import { Achivment, FeatureProps, LinksData, TechData } from "@/Types";
import fantasture from "@/public/images/project/fantasture-avatar.png";
import { StaticImageData } from "next/image";
import authFeature from "@/public/images/features/fantasture/feature1.png";
import comments from "@/public/images/features/fantasture/feature2.png";
import raiting from "@/public/images/features/fantasture/feature3.png";
import checkout from "@/public/images/features/fantasture/feature4.png";
import filter from "@/public/images/features/fantasture/feature5.png";
import modal from "@/public/images/features/fantasture/feature6.png";
import admin from "@/public/images/features/fantasture/feature7.png";

interface ProjectData {
  name: string;
  description: string;
  image: string | StaticImageData;
  technologies: Array<TechData>;
  links: Array<LinksData>;
  features: Array<FeatureProps>;
  achivments: Array<Achivment>;
}

export const PROJECT_DATA: Array<ProjectData> = [
  {
    name: "Fantasture",
    description:
      "FANTASTURE SHOP is more than just a furniture store; it's a place where your imagination comes to life and your dreams of the perfect home become a reality. Visit us today and discover the world of beauty and comfort we've created for you. Welcome to FANTASTURE SHOP - your home of dreams!",
    image: fantasture,
    technologies: [
      {
        icon: "js",
        title: "JS",
      },
      {
        icon: "ts",
        title: "TS",
      },
      {
        icon: "react",
        title: "REACT",
      },
      {
        icon: "tailwind",
        title: "tailwind",
      },
      {
        icon: "next",
        title: "nextJs",
      },
      {
        icon: "prisma",
        title: "prisma",
      },
      {
        icon: "zod",
        title: "zod",
      },
      {
        icon: "redis",
        title: "Redis",
      },
      {
        icon: "mongodb",
        title: "MongoDB",
      },
      {
        icon: "js",
        title: "JS",
      },
      {
        icon: "ts",
        title: "TS",
      },
      {
        icon: "react",
        title: "REACT",
      },
      {
        icon: "tailwind",
        title: "tailwind",
      },
      {
        icon: "next",
        title: "nextJs",
      },
      {
        icon: "prisma",
        title: "prisma",
      },
      {
        icon: "zod",
        title: "zod",
      },
      {
        icon: "redis",
        title: "Redis",
      },
      {
        icon: "mongodb",
        title: "MongoDB",
      },
      {
        icon: "js",
        title: "JS",
      },
      {
        icon: "ts",
        title: "TS",
      },
      {
        icon: "react",
        title: "REACT",
      },
      {
        icon: "tailwind",
        title: "tailwind",
      },
      {
        icon: "next",
        title: "nextJs",
      },
      {
        icon: "prisma",
        title: "prisma",
      },
      {
        icon: "zod",
        title: "zod",
      },
      {
        icon: "redis",
        title: "Redis",
      },
      {
        icon: "mongodb",
        title: "MongoDB",
      },
    ],
    links: [
      {
        value: "deploy",
        href: "https://fantasture-shop.vercel.app/",
        icon: "live",
      },
    ],
    features: [
      {
        name: "Next Auth",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: authFeature,
      },
      {
        name: "Comments",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: comments,
      },
      {
        name: "Raiting",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: raiting,
      },
      {
        name: "Checkout",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: checkout,
      },
      {
        name: "Category filter",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: filter,
      },
      {
        name: "Modals",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: modal,
      },
      {
        name: "Admin dashboard",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptates. Similique architecto, iure et eligendi possimus hic. Enim, porro ipsam repudiandae minus quo veritatis debitis hic, rerum, necessitatibus vero nemo.",
        img: admin,
      },
    ],
    achivments: [
      {
        title: "test1",
        description:
          "dsadsadadadkjakdasdkljasdklashl fhadjad hhadk adjals hfh kjadjk kdj akjd ad ;sa ;k",
      },
      {
        title: "test2",
        description:
          "dsadsadadadkjakdasdkljasdklashl fhadjad hhadk adjals hfh kjadjk kdj akjd ad ;sa ;k",
      },
      {
        title: "test3",
        description:
          "dsadsadadadkjakdasdkljasdklashl fhadjad hhadk adjals hfh kjadjk kdj akjd ad ;sa ;k",
      },
    ],
  },
];
