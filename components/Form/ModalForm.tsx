"use client";

import { useContext } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Textarea from "../UI/Textarea/Textarea";
import { ModalContext } from "@/store";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function ModalForm() {
  const { open, toggle } = useContext(ModalContext);
  return (
    <Modal isOpen={open}>
      <form
        className="flex flex-col gap-16px"
        action={async formData => {
          const data = await sendEmail(formData);
          if (data?.error) {
            toast.error(data?.error);
            return;
          }
          toggle();
          toast.success("Email sent successfully!");
        }}
      >
        <Input placeholder="Name" id="userName" name="userName" label="name" />
        <Input placeholder="Email" id="email" name="email" label="email" />
        <Textarea
          placeholder="Your message..."
          name="userMessage"
          label="Text"
        />
        <div className="flex items-center gap-16px">
          <SubmitButton />
          <Button onClick={toggle} buttonSize="small">
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
}
