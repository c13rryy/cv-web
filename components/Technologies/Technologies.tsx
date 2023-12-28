import { MotionDiv } from "../MotionDiv/MotionDiv";
import Typography from "../UI/Typo/Typography";
import TechSwiper from "./TechnologiesSwiper/TechSwiper";

export default function Technologies() {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography tag="h4" text="Tech Stack" />
      <TechSwiper />
    </MotionDiv>
  );
}
