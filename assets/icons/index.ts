import Facebook from "./Facebook";
import Git from "./Git";
import GitWhite from "./GitWhite";
import Instagram from "./Instagram";
import LI from "./LI";
import LiCircle from "./LiCircle";
import Mail from "./Mail";
import Location from "./Location";
import Css from "./techStack/Css";
import Html from "./techStack/Html";
import Js from "./techStack/Js";
import MongoDb from "./techStack/MongoDb";
import NextJs from "./techStack/Next";
import React from "./techStack/React";
import Remix from "./techStack/Remix";
import Sass from "./techStack/Sass";
import Tailwind from "./techStack/Tailwind";
import Ts from "./techStack/Ts";
import Phone from "./Phone";
import Arrow from "./Arrow";
import Live from "./Live";
import Prisma from "./techStack/Prisma";
import Redis from "./techStack/Redis";
import Zod from "./techStack/Zod";

export const content = {
  react: React,
  ts: Ts,
  js: Js,
  tailwind: Tailwind,
  css: Css,
  html: Html,
  remix: Remix,
  next: NextJs,
  sass: Sass,
  mongodb: MongoDb,
  mail: Mail,
  git: Git,
  li: LI,
  "li-circle": LiCircle,
  "git-white": GitWhite,
  inst: Instagram,
  facebook: Facebook,
  location: Location,
  phone: Phone,
  arrow: Arrow,
  live: Live,
  prisma: Prisma,
  redis: Redis,
  zod: Zod,
};

export type IAvailableIcons = keyof typeof content;
