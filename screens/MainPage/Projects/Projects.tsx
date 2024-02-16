import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Section from "@/components/UI/Section/Section";
import { ANCHOR_PROJECTS } from "@/constans/path";
import { PROJECTS_DATA } from "@/data/projectsInfo";

export default function Projects() {
  return (
    <Section
      anchor={ANCHOR_PROJECTS.slice(1)}
      styles="mt-[90px]"
      title="projects"
      sectionBackground
    >
      <div className="2xl:mt-52px xl:mt-40px sm:mt-30px mt-20px lg:px-117px xl:px-[80px] px-[0px]">
        <div className="grid xl:grid-cols-2 grid-cols-1 sm:gap-24px gap-16px project-card">
          {PROJECTS_DATA.map((project, idx) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                links={project.links}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </Section>
  );
}
