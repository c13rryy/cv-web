import { LinksData } from "@/Types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "../UI/Icon/Icon";
import Typography from "../UI/Typo/Typography";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  tech: Array<string>;
  links: Array<LinksData>;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  links,
}: ProjectCardProps) {
  return (
    <div className="bg-[#fff] grid relative  lg:grid-cols-[550px,1fr] md:grid-cols-[430px,1fr] xl:grid-cols-[400px,1fr] grid-cols-[1fr] gap-24px rounded-[24px] py-20px xl:px-20px px-10px">
      <div className="rounded-[24px] relative w-full bg-grey_2   lg:h-[550px]  md:h-[400px] sm:h-[430px] xs:h-[370px] h-[330px] overflow-hidden image-animation">
        <Image src={image} alt={title} loading="lazy" />
      </div>
      <div className="flex flex-col items-center lg:gap-32px sm:gap-24px gap-16px justify-center">
        <Typography
          tag="h3"
          className="text-28 uppercase font-semibold leading-32 text-black_1"
        >
          {title}
        </Typography>
        <Typography type="aboutP" className="mt-8px" text={description} />
        <div className="flex flex-col justify-center gap-24px">
          <Typography
            tag="h4"
            className="uppercase text-center"
            text="Used Tech"
          />
          <ul className="flex  justify-center gap-16px">
            {tech.map(el => (
              <li
                className="bg-black_1 cursor-pointer capitalize rounded-md p-8px"
                key={el}
              >
                <Typography text={el} type="thinP" className="text-[#fff]" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-24px">
          {links.map(info => (
            <Link
              key={info.value}
              href={info.href}
              className="flex gap-6px text-16 text-black_2 leading-24 font-medium"
            >
              <Icon icon={info.icon ?? "mail"} size={32} viewBox="0 0 20 24" />
              <span>{info.value}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
