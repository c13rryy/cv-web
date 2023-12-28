"use client";

import { useFormStatus } from "react-dom";
import Button from "../UI/Button/Button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" buttonSize="small">
      {pending ? (
        <div className="flex gap-8px items-center">
          Sendind
          <div className="h-[14px] w-[14px] animate-spin rounded-full  border-b-2 border-black_1" />
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
