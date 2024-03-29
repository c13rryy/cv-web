import { FeatureProps } from "@/Types";
import FeaturesSlider from "@/components/FeaturesSlider/FeaturesSlider";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import Section from "@/components/UI/Section/Section";
import { FC } from "react";

interface ProjectFeaturesProps {
  projectName: string;
  features: Array<FeatureProps>;
}

const ProjectFeatures: FC<ProjectFeaturesProps> = ({
  projectName,
  features,
}) => {
  return (
    <Section sectionBackground={false} title={`${projectName} features`}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="sm:mt-60px mt-30px xh:px-[170px] 2xl:px-117px lg:px-[145px] md:px-[95px] px-[0]"
      >
        <FeaturesSlider features={features} />
      </MotionDiv>
    </Section>
  );
};

export default ProjectFeatures;
