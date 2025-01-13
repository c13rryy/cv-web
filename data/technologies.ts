import { createTechDataWithRepetitions } from "@/helpers/createTechDataWithRepetitions";
import { TechData } from "@/Types";

const uniqueTechData: Array<TechData> = [
  { icon: "html", title: "HTML" },
  { icon: "css", title: "CSS" },
  { icon: "js", title: "JS" },
  { icon: "storybook", title: "Storybook" },
  { icon: "ts", title: "TS" },
  { icon: "react", title: "REACT" },
  { icon: "redux", title: "Redux" },
  { icon: "jest", title: "Jest" },
  { icon: "tailwind", title: "tailwind" },
  { icon: "sass", title: "sass" },
  { icon: "next", title: "nextJs" },
  { icon: "remix", title: "Remix" },
  { icon: "graphql", title: "GraphQL" },
  { icon: "prisma", title: "Prisma" },
  { icon: "redis", title: "Redis" },
  { icon: "mongodb", title: "MongoDB" },
];

export const TECH_DATA = createTechDataWithRepetitions(uniqueTechData);