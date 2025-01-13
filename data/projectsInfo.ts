import sagTech from "@/public/images/sagTech.png";
import artikyl from "@/public/images/artikyl.png";
import sportex from "@/public/images/sportex.png";
import fantasture from "@/public/images/fantasture.png";
import tapply from "@/public/images/project/tapply.webp";
import { ProjectCard } from "@/Types";

export const PROJECTS_DATA: ProjectCard[] = [
  {
    title: "SagTech",
    description:
      "At SagTech, we're dedicated to pushing the boundaries of technology to deliver cutting-edge websites and applications that drive your business forward. With a team of highly skilled developers and designers, we specialize in crafting bespoke digital solutions tailored to your unique requirements.",
    tech: ["React", "Tailwind", "Remix"],
    image: sagTech,
    links: [
      {
        value: "deploy",
        href: "https://sagtech.io/",
        icon: "live",
      },
    ],
  },

  {
    title: "Fantasture",
    description:
      "FANTASTURE SHOP is more than just a furniture store; it's a place where your imagination comes to life and your dreams of the perfect home become a reality. Visit us today and discover the world of beauty and comfort we've created for you. Welcome to FANTASTURE SHOP - your home of dreams!",
    tech: ["React", "Next.js", "Prisma"],
    image: fantasture,
    links: [
      {
        value: "deploy",
        href: "https://fantasture-shop.vercel.app/",
        icon: "live",
      },
    ],
  },

  {
    title: "Sportex",
    description:
      "At SPORTEX, we're dedicated to providing top-notch services within the sporting community. Whether you're a seasoned athlete or just starting your fitness journey, SPORTEX has something for everyone.",
    tech: ["HTML", "Js", "Scss"],
    image: sportex,
    links: [
      {
        value: "deploy",
        href: "https://sportexclub.com/",
        icon: "live",
      },
    ],
  },
  {
    title: "Artukyl",
    description:
      "At Artukyl, we're committed to providing unparalleled legal services tailored to meet your unique needs. With a team of experienced attorneys specializing in various fields of law, we offer comprehensive solutions to individuals and businesses alike.",
    tech: ["HTML", "js", "Css"],
    image: artikyl,
    links: [
      {
        value: "deploy",
        href: "https://artykul.by/",
        icon: "live",
      },
    ],
  },
  {
    title: "Tapply",
    description:
      "Tapply is an innovative builder solution for creating Telegram web applications within the Telegram platform. Similar to how Shopify empowers e-commerce, Tapply enables users to choose from a variety of templates, such as e-commerce applications or appointment booking systems. Users can easily create their custom applications and gain access to an administrative panel for comprehensive analytics and marketing management.",
    tech: ["React", "Tailwind", "Tg Mini Apps"],
    image: tapply,
    links: [
      {
        value: "deploy",
        href: "https://t.me/tapply_user_bot",
        icon: "live",
      },
    ],
  },
];
