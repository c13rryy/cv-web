import { ProjectCardProps } from "@/components/ProjectCard/ProjectCard";
import sagTech from "@/public/images/sagTech.png";
import artikyl from "@/public/images/newArtikyl.png";
import sportex from "@/public/images/sportex.png";

export const PROJECTS_DATA: ProjectCardProps[] = [
  {
    title: "SagTech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["React", "Tailwind", "Remix"],
    image: sagTech,
    links: [
      {
        value: "deploy version",
        href: "https://sagtech.io/",
        icon: "live",
      },
    ],
  },

  {
    title: "SPORTEX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["HTML", "Js", "Scss"],
    image: sportex,
    links: [
      {
        value: "deploy version",
        href: "https://sportexclub.com/",
        icon: "live",
      },
    ],
  },
  {
    title: "Artikyl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["HTML", "js", "Css"],
    image: artikyl,
    links: [
      {
        value: "deploy version",
        href: "https://artykul.by/",
        icon: "live",
      },
    ],
  },
];
