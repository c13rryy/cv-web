import { PROJECT_DATA } from "@/data/project-data";
import Achievements from "@/screens/ProjectPage/Achievements/Achievements";
import ProjectFeatures from "@/screens/ProjectPage/ProjectFeatures/ProjectFeatures";
import ProjectInfo from "@/screens/ProjectPage/ProjectInfo/ProjectInfo";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPage {
  params: {
    projectId: string;
  };
}

export const metadata: Metadata = {
  title: "Ivan Kurylenak | Front-end Developer",
  description: "Here you will find detailed information about my projects",
};

const page = ({ params }: ProjectPage) => {
  const projectIndex = PROJECT_DATA.findIndex(
    project => project.name === params.projectId
  );

  if (projectIndex === -1) return notFound();

  const currentProject = PROJECT_DATA[projectIndex];

  return (
    <>
      <ProjectInfo
        name={currentProject.name}
        description={currentProject.description}
        technologies={currentProject.technologies}
        image={currentProject.image}
        links={currentProject.links}
      />
      {currentProject.features && (
        <ProjectFeatures
          projectName={currentProject.name}
          features={currentProject.features}
        />
      )}
      <Achievements achievements={currentProject.achivments} />
    </>
  );
};

export default page;
