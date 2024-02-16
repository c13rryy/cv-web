"use client";

import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import { ModalContext } from "@/store";
import Typography from "../UI/Typo/Typography";
import Button from "../UI/Button/Button";

interface ProjectModalProps {
  title: string;
  description: string;
}

const ProjectModal = ({ title, description }: ProjectModalProps) => {
  const { projectOpen, projectModalToggle } = useContext(ModalContext);
  return (
    <Modal isOpen={projectOpen[title]}>
      <div className="flex flex-col sm:gap-16px gap-12px justify-center">
        <div>
          <Typography
            tag="h3"
            className="text-28 font-semibold leading-32 text-black_1"
          >
            {title}
          </Typography>
        </div>
        <Typography type="aboutP" text={description} />
      </div>
      <div className="flex justify-end sm:mt-20px mt-15px">
        <Button onClick={() => projectModalToggle(title)} buttonSize="small">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
