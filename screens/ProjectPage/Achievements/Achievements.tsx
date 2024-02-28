import { Achivment } from "@/Types";
import Card from "@/components/Card/Card";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import Section from "@/components/UI/Section/Section";
import { FC } from "react";

interface AchievementsProps {
  achievements: Array<Achivment>;
}

const Achievements: FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Section
      title="Achievements"
      sectionBackground
      styles="2xl:mt-[90px] xl:mt-[70px] sm:mt-[50px] mt-[40px]"
    >
      <div className="flex xl:flex-row flex-col xl:gap-24px gap-16px sm:mt-40px mt-24px">
        {achievements.map((el, idx) => (
          <MotionDiv
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            key={el.title}
          >
            <Card title={el.title} description={el.description} />
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
