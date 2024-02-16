import { LinksData } from "@/Types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "../UI/Icon/Icon";
import Typography from "../UI/Typo/Typography";
import ProjectModal from "../ProjectModal/ProjectModal";
import DetailsButton from "./DetailsButton/DetailsButton";

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
    <>
      <div className="bg-[#fff] relative flex flex-col gap-16px rounded-[16px] py-16px px-12px h-fit">
        <div className="flex flex-col gap-16px items-center">
          <div className="overflow-hidden image-animation">
            <div className="rounded-[14px] relative w-full border-[2px] border-solid border-grey_4 bg-grey_2 lg:h-[350px] xl:h-[300px] sm:h-[350px] mds:h-[300px] h-[250px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                loading="eager"
                className="rounded-[14px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-16px">
            <div className="flex xl:flex-row flex-col items-center xl:gap-16px gap-10px">
              {links.map(info => (
                <Link
                  key={info.value}
                  href={info.href}
                  className="flex gap-6px text-16 text-black_2 leading-24 font-medium"
                >
                  <Icon
                    icon={info.icon ?? "mail"}
                    size={32}
                    viewBox="0 0 20 24"
                  />
                  <span>{info.value}</span>
                </Link>
              ))}

              <div className="flex xl:flex-col flex-row justify-center xl:items-start items-center mds:gap-10px gap-8px">
                <Typography tag="h4" className="text-center" text="Used tech" />
                <ul className="flex justify-center mds:gap-6px gap-4px">
                  {tech.map(el => (
                    <li
                      className="bg-black_1 cursor-pointer capitalize rounded-md px-6px py-4px"
                      key={el}
                    >
                      <Typography
                        text={el}
                        type="thinP"
                        className="text-[#fff] text-10"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <DetailsButton name={title} />
          </div>
        </div>
      </div>
      <ProjectModal title={title} description={description} />
    </>
  );
}
