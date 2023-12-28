import { ProjectCardProps } from "@/components/ProjectCard/ProjectCard";
import sagTech from "@/public/images/sagTech.png";
import artikyl from "@/public/images/newArtikyl.png";
import sportex from "@/public/images/sportex.png";

export const PROJECTS_DATA: ProjectCardProps[] = [
  {
    title: "SagTech",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["react", "tailwind", "remix"],
    image: sagTech,
    links: [
      {
        value: "deploy version",
        href: "/",
        icon: "live",
      },
    ],
  },

  {
    title: "SPORTEX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["react", "js"],
    image: sportex,
    links: [
      {
        value: "deploy version",
        href: "/",
        icon: "live",
      },
    ],
  },
  {
    title: "Artikyl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing,  reprehenderit et laborum, rem, dolore eum quod voluptate,             exercitationem nobis, nihil esse debitis maxime facere minus sint, Eligendi illum libero dolorum cum laboriosam corrupti quidem,",
    tech: ["react", "js"],
    image: artikyl,
    links: [
      {
        value: "deploy version",
        href: "/",
        icon: "live",
      },
    ],
  },
];
