"use server";

import { getErrorMessage, validateEmail, validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const data = {
    userName: formData.get("userName"),
    email: formData.get("email"),
    userMessage: formData.get("userMessage"),
  };

  if (!validateString(data.userName, 100, 1)) {
    return {
      error: "Invalid user name",
    };
  }

  if (!validateString(data.userMessage, 400, 3)) {
    return {
      error: "Invalid user message",
    };
  }

  if (
    !validateString(data.email, 100, 3) ||
    validateEmail(data.email) === null
  ) {
    return {
      error: "Invalid user email",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "spell20044@gmail.com",
      subject: "Hello World",
      reply_to: data.email as string,
      text: data.userMessage as string,
    });
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }
};
