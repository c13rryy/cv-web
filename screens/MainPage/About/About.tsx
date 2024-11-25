import Card from "@/components/Card/Card";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import Section from "@/components/UI/Section/Section";
import { ANCHOR_ABOUT } from "@/constans/path";

import { ABOUT_DATA } from "@/data/about";

export default function About() {
  return (
    <Section
      anchor={ANCHOR_ABOUT.slice(1)}
      sectionBackground={false}
      title="About me"
    >
      <div className="2xl:mt-52px xl:mt-40px sm:mt-30px mt-20px grid xl:grid-cols-[1fr,1fr] grid-cols-1 2xl:gap-[20px] xl:gap-[15px] gap-10px">
        {ABOUT_DATA.map((el, idx) => (
          <MotionDiv
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            key={el.title}
          >
            <Card
              title={el.title}
              description={el.description}
              data={el.listData}
            />
          </MotionDiv>
        ))}
      </div>
    </Section>
  );
}
