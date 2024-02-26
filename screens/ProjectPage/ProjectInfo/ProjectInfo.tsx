import { LinksData, TechData } from "@/Types";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import TechSwiper from "@/components/Technologies/TechnologiesSwiper/TechSwiper";
import { Icon } from "@/components/UI/Icon/Icon";
import Section from "@/components/UI/Section/Section";
import Typography from "@/components/UI/Typo/Typography";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ProjectInfoProps {
  name: string;
  description: string;
  image: string | StaticImageData;
  technologies: Array<TechData>;
  links: Array<LinksData>;
}

const ProjectInfo: FC<ProjectInfoProps> = ({
  name,
  description,
  image,
  technologies,
  links,
}) => {
  return (
    <Section sectionBackground>
      <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-32px gap-16px">
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
          <div className="relative w-full lg:h-[500px] sm:h-[450px] mds:h-[350px] h-[250px]">
            <Image
              src={image}
              alt={name}
              fill
              placeholder="blur"
              priority
              className="object-cover rounded-[20px] object-[top_left]"
            />
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8px"
        >
          <Typography tag="h1" text={name} />
          <Typography type="defaultP" text={description} />
          <div className="sm:pt-10px pt-[0px]">
            <Typography tag="h3" text="Tech Stack" />
            <TechSwiper sliderWidth="max-w-[1200px]" techData={technologies} />
          </div>
          <div className="sm:pt-10px pt-[0px] flex flex-col gap-10px">
            <Typography tag="h3" text="Links" />
            <ul>
              {links.map(link => (
                <li key={link.value}>
                  {" "}
                  <Link
                    key={link.value}
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-6px"
                  >
                    <Icon
                      className="relative top-[2px]"
                      icon={link.icon ?? "mail"}
                      size={20}
                    />
                    <Typography type="defaultP">{link.value}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </MotionDiv>
      </div>
    </Section>
  );
};

export default ProjectInfo;
