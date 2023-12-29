import ProjectSwiper from "@/components/ProjectsSwiper/ProjectsSwiper";
import Section from "@/components/UI/Section/Section";
import { ANCHOR_PROJECTS } from "@/constans/path";

export default function Projects() {
  return (
    <Section
      anchor={ANCHOR_PROJECTS.slice(1)}
      styles="mt-[90px]"
      title="projects"
      sectionBackground
    >
      <div className="2xl:mt-52px xl:mt-40px sm:mt-30px mt-20px sm:px-117px px-[0px]">
        <ProjectSwiper />
      </div>
    </Section>
  );
}
