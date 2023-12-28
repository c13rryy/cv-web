import Technologies from "@/components/Technologies/Technologies";
import Button from "@/components/UI/Button/Button";
import { Icon } from "@/components/UI/Icon/Icon";
import Section from "@/components/UI/Section/Section";
import Image from "next/image";
import Link from "next/link";
import main from "@/public/images/main.jpg";
import Typography from "@/components/UI/Typo/Typography";
import { MotionDiv } from "@/components/MotionDiv/MotionDiv";
import { ANCHOR_HOME } from "@/constans/path";

export default function Introduction() {
  return (
    <Section anchor={ANCHOR_HOME.slice(1)} styles="mt-[76px]" sectionBackground>
      <div className="flex sm:flex-row sm:gap-24px gap-32px flex-col-reverse sm:items-center items-start sm:justify-between justify-start sm:pb-52px pb-32px">
        <MotionDiv
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-16px"
        >
          <Typography tag="h1" text="Front-End React Developer" />
          <Typography
            type="defaultP"
            text=" Hi, I&#39;m Ivan Kurylenak. A motivated Front-end React Developer
            based in Minsk, Belarus."
          />
          <div className="flex gap-16px">
            <Link
              className="hover:scale-110 scale-100 duration-700 hover:duration-700"
              href="/"
            >
              <Icon icon="git" size={36} />
            </Link>
            <Link
              className="hover:scale-110 scale-100 duration-700 hover:duration-700"
              href="/"
            >
              <Icon icon="li" size={36} />
            </Link>
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sm:block sm:w-fit flex justify-center w-full"
        >
          <div className="borderAnim relative overflow-hidden ">
            <Image
              src={main}
              alt="My avatar"
              width={500}
              priority
              placeholder="blur"
              style={{
                objectFit: "cover",
                transform: "scale(1.2)",
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </MotionDiv>
      </div>
      <Technologies />
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sm:mt-[65px] mt-[35px]"
      >
        <Button className="sm:w-auto w-full" buttonSize="large">
          Download CV{" "}
        </Button>
      </MotionDiv>
    </Section>
  );
}
