import { Achivment, FeatureProps, LinksData, TechData } from "@/Types";
import fantasture from "@/public/images/project/fantasture-avatar.png";
import sagTech from "@/public/images/project/sagTech-avatar.png";
import artikul from "@/public/images/project/artikul-avatar.png";
import sportex from "@/public/images/project/sportex-avatar.png";
import { StaticImageData } from "next/image";
import authFeature from "@/public/images/features/fantasture/feature1.png";
import comments from "@/public/images/features/fantasture/feature2.png";
import raiting from "@/public/images/features/fantasture/feature3.png";
import checkout from "@/public/images/features/fantasture/feature4.png";
import filter from "@/public/images/features/fantasture/feature5.png";
import modal from "@/public/images/features/fantasture/feature6.png";
import admin from "@/public/images/features/fantasture/feature7.png";
import graph from "@/public/images/features/sagTech/feature1.png";
import sagModal from "@/public/images/features/sagTech/feature2.png";
import animaton from "@/public/images/features/sagTech/feature3.png";
import mobileArtukyl from "@/public/images/features/artikul/artikyl1.png";
import mobileSportex from "@/public/images/features/sportex/feature1.png";
import artukylPage from "@/public/images/features/artikul/artikyl3.png";
import artukylLanding from "@/public/images/features/artikul/artilul2.png";
import sportexLanding from "@/public/images/features/sportex/feature2.png";
import {
  ARTYKUL_TECH,
  FANTASTURE_TECH,
  SAGTECH_TECH,
  SPORTEX_TECH,
} from "./project-technologies";

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
    technologies: FANTASTURE_TECH,
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
          "Integrated NextAuth.js for seamless authentication, providing users with secure and intuitive login experiences across the platform",
        img: authFeature,
      },
      {
        name: "Comments",
        description:
          "Implemented a robust comments system for product reviews, enabling users to share their feedback and experiences with ease, fostering community engagement and trust",
        img: comments,
      },
      {
        name: "Raiting",
        description:
          "Created a robust product rating system, empowering users to share opinions and make informed decisions, enhancing interaction and satisfaction.",
        img: raiting,
      },
      {
        name: "Checkout",
        description:
          "Enabled seamless payment processing through Stripe, ensuring secure transactions and providing users with a smooth and reliable checkout experience.",
        img: checkout,
      },
      {
        name: "Category filter",
        description:
          "Implemented category-based filtering with server actions, enhancing efficiency and accuracy in sorting and displaying relevant content to users.",
        img: filter,
      },
      {
        name: "Modals",
        description:
          "Designed three modal windows: one for product search, another for adding items to favorites, and the third for managing shopping cart items, optimizing user interaction and enhancing overall usability",
        img: modal,
      },
      {
        name: "Admin dashboard",
        description:
          "Developed an intuitive admin panel for efficient management of content, users, and settings, empowering administrators with powerful tools to oversee and control the platform effectively.",
        img: admin,
      },
    ],
    achivments: [
      {
        title: "Maximized Performance and SEO",
        description:
          "Implemented strategies for lightning-fast performance and high search engine visibility, optimizing every aspect of the website for speed, responsiveness, and SEO",
      },
      {
        title: "Cutting-Edge Technology Integration",
        description:
          "Incorporated the latest technologies and libraries, staying ahead of the curve to deliver modern features and functionalities",
      },
      {
        title: "Rapid, High-Quality Development",
        description:
          "Completed the project swiftly without compromising quality, demonstrating efficiency and excellence in every stage of development.",
      },
    ],
  },
  {
    name: "SagTech",
    description:
      "At SagTech, we're dedicated to pushing the boundaries of technology to deliver cutting-edge websites and applications that drive your business forward. With a team of highly skilled developers and designers, we specialize in crafting bespoke digital solutions tailored to your unique requirements.",
    image: sagTech,
    technologies: SAGTECH_TECH,
    links: [
      {
        value: "deploy",
        href: "https://sagtech.io/",
        icon: "live",
      },
    ],
    features: [
      {
        name: "Charts",
        description:
          "Utilized React-ApexCharts to create dynamic and interactive charts, providing users with insightful data visualizations for enhanced understanding and analysis.",
        img: graph,
      },
      {
        name: "Feedback Modal Window",
        description:
          "Implemented a user-friendly feedback modal window, allowing seamless communication between users and the platform, fostering engagement and improving user experience.",
        img: sagModal,
      },
      {
        name: "Animation",
        description:
          "Incorporated captivating animations throughout the platform, enhancing user engagement and providing a delightful browsing experience that captures attention and leaves a lasting impression",
        img: animaton,
      },
    ],
    achivments: [
      {
        title: "Maximized Performance and SEO",
        description:
          "Implemented strategies for lightning-fast performance and high search engine visibility, optimizing every aspect of the website for speed, responsiveness, and SEO",
      },
      {
        title: "Cutting-Edge Technology Integration",
        description:
          "Incorporated the latest technologies and libraries, staying ahead of the curve to deliver modern features and functionalities",
      },
      {
        title: "Rapid, High-Quality Development",
        description:
          "Completed the project swiftly without compromising quality, demonstrating efficiency and excellence in every stage of development.",
      },
    ],
  },
  {
    name: "Artukyl",
    description:
      "At Artukyl, we're committed to providing unparalleled legal services tailored to meet your unique needs. With a team of experienced attorneys specializing in various fields of law, we offer comprehensive solutions to individuals and businesses alike.",
    image: artikul,
    technologies: ARTYKUL_TECH,
    links: [
      {
        value: "deploy",
        href: "https://artykul.by/",
        icon: "live",
      },
    ],
    features: [
      {
        name: "Responsive Layout Design",
        description:
          "Employed responsive layout techniques to ensure optimal display and usability across devices, maintaining consistency and accessibility throughout the platform's design.",
        img: artukylLanding,
      },
      {
        name: "Mobile Responsiveness",
        description:
          "Ensured seamless adaptability for mobile devices, optimizing the platform's layout and functionality to deliver a smooth and intuitive experience across various screen sizes and devices.",
        img: mobileArtukyl,
      },
      {
        name: "Multi-page Functionality",
        description:
          "Implemented a multi-page structure to organize content efficiently, providing users with clear navigation and seamless transitions between different sections for a comprehensive browsing experience.",
        img: artukylPage,
      },
    ],
    achivments: [
      {
        title: "Maximized Performance and SEO",
        description:
          "Implemented strategies for lightning-fast performance and high search engine visibility, optimizing every aspect of the website for speed, responsiveness, and SEO",
      },
      {
        title: "Cutting-Edge Technology Integration",
        description:
          "Incorporated the latest technologies and libraries, staying ahead of the curve to deliver modern features and functionalities",
      },
      {
        title: "Rapid, High-Quality Development",
        description:
          "Completed the project swiftly without compromising quality, demonstrating efficiency and excellence in every stage of development.",
      },
    ],
  },
  {
    name: "Sportex",
    description:
      "At SPORTEX, we're dedicated to providing top-notch services within the sporting community. Whether you're a seasoned athlete or just starting your fitness journey, SPORTEX has something for everyone.",
    image: sportex,
    technologies: SPORTEX_TECH,
    links: [
      {
        value: "deploy",
        href: "https://sportexclub.com/",
        icon: "live",
      },
    ],
    features: [
      {
        name: "Responsive Layout Design",
        description:
          "Employed responsive layout techniques to ensure optimal display and usability across devices, maintaining consistency and accessibility throughout the platform's design.",
        img: sportexLanding,
      },
      {
        name: "Mobile Responsiveness",
        description:
          "Ensured seamless adaptability for mobile devices, optimizing the platform's layout and functionality to deliver a smooth and intuitive experience across various screen sizes and devices.",
        img: mobileSportex,
      },
    ],
    achivments: [
      {
        title: "Maximized Performance and SEO",
        description:
          "Implemented strategies for lightning-fast performance and high search engine visibility, optimizing every aspect of the website for speed, responsiveness, and SEO",
      },
      {
        title: "Cutting-Edge Technology Integration",
        description:
          "Incorporated the latest technologies and libraries, staying ahead of the curve to deliver modern features and functionalities",
      },
      {
        title: "Rapid, High-Quality Development",
        description:
          "Completed the project swiftly without compromising quality, demonstrating efficiency and excellence in every stage of development.",
      },
    ],
  },
];
