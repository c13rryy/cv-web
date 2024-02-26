import { PROJECT_DATA } from "@/data/project-data";
import Achivments from "@/screens/ProjectPage/Achivments/Achivments";
import ProjectFeatures from "@/screens/ProjectPage/ProjectFeatures/ProjectFeatures";
import ProjectInfo from "@/screens/ProjectPage/ProjectInfo/ProjectInfo";
import { notFound } from "next/navigation";

interface ProjectPage {
  params: {
    projectId: string;
  };
}

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
      <ProjectFeatures
        projectName={currentProject.name}
        features={currentProject.features}
      />
      <Achivments achivments={currentProject.achivments} />
    </>
  );
};

export default page;
