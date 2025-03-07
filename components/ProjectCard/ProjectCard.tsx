import { LinksData } from "@/Types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Icon } from "../UI/Icon/Icon";
import Typography from "../UI/Typo/Typography";
import DetailsButton from "./DetailsButton/DetailsButton";
import classNames from "classnames";

export interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  tech: Array<string>;
  links: Array<LinksData>;
  disabledAnimation?: boolean;
}

export default function ProjectCard({
  title,
  tech,
  image,
  links,
  disabledAnimation,
}: ProjectCardProps) {
  return (
    <div className="bg-[#fff] relative flex flex-col gap-16px rounded-[16px] py-16px px-12px h-fit">
      <div className="flex flex-col sm:gap-16px gap-12px">
        <div
          className={classNames(
            "rounded-[14px] relative w-full border-[2px] border-solid border-grey_4 bg-grey_2 lg:h-[350px] xl:h-[300px] sm:h-[350px] mds:h-[300px] h-[250px] overflow-hidden",
            !disabledAnimation && "image-animation"
          )}
        >
          <Image
            src={image}
            alt={title}
            priority={true}
            sizes={"30vw"}
            className="rounded-[14px]"
          />
        </div>
        <div className="flex items-center justify-between">
          <Typography tag="h4" text={title} />
          <div className="mds:block hidden">
            <DetailsButton href={title} />
          </div>
        </div>
        <div className="flex flex-col gap-16px">
          <div className="flex justify-between mds:flex-row flex-col mds:items-center items-start xl:gap-16px gap-10px">
            {links.map(info => (
              <Link
                key={info.value}
                href={info.href}
                className="flex items-center gap-[2px] text-16 text-black_2 leading-24 font-medium"
              >
                <Icon
                  className="relative top-[1.2px]"
                  icon={info.icon ?? "mail"}
                  size={24}
                />
                <Typography tag="h4">{info.value}</Typography>
              </Link>
            ))}

            <div className="flex  justify-center items-center gap-6px">
              <Typography tag="h4" className="text-center" text="Used tech" />
              <ul className="flex justify-center mds:gap-6px gap-4px">
                {tech.map(el => (
                  <li
                    className="bg-black_1 cursor-pointer capitalize rounded-md px-4px py-2"
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
          <div className="mds:hidden block w-full">
            <DetailsButton href={title} />
          </div>
        </div>
      </div>
    </div>
  );
}
