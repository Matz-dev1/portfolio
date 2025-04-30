"use client";
import emailjs from "@emailjs/browser";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MessageMe = () => {
  const [errorMessage, setErrorMessage] = useState<Message>({
    name: "",
    email: "",
    message: "",
  });
  const [formValues, setFormValues] = useState<Message>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init("iKIAmfZbYMVYMVs6V");
  }, []);

  type Message = {
    name: string;
    email: string;
    message: string;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setErrorMessage((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const errors = validate(formValues);
    setErrorMessage(errors);

    if (Object.values(errors).every((error) => error === "")) {
      emailjs
        .send(
          "service_8gwtval",
          "template_shqk54x",
          {
            name: formValues.name,
            email: formValues.email,
            message: formValues.message,
          },
          "iKIAmfZbYMVYMVs6V"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFormValues({ name: "", email: "", message: "" });
            setSubmitStatus("success");
          },
          (error) => {
            console.log("FAILED...", error);
            setSubmitStatus("error");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsSubmitting(false);
    }
  };
  const validate = (values: Message) => {
    const errors: Message = {
      name: "",
      email: "",
      message: "",
    };

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.name) {
      errors.name = "Please provide a name.";
    }
    if (!values.email) {
      errors.email = "Please provide an email.";
    } else if (!regex.test(values.email)) {
      errors.email = "Your email is invalid, try again.";
    }
    if (!values.message) {
      errors.message = "Please provide a message.";
    }
    return errors;
  };

  return (
    <div className="h-screen flex flex-col bg-[#5f0f53]" id="ContactMe">
      <div className="flex flex-col align-bottom py-auto mt-40 gap-4 px-4">
        <h2 className="font-bold text-2xl">Get in touch</h2>
        <p className="opacity-90">Have a question or want to work together?</p>
      </div>
      <div className="flex flex-row gap-4 h-auto my-auto ">
        <form
          className="flex flex-col gap-4 w-3/4  p-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-row w-full gap-5">
              <div className="flex flex-col gap-1 text-[14px] w-1/2">
                <label className="block font-bold text-[14px]" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g. Stephen King"
                  className={`border-2 border-gray-300 focus:border-gray-500 focus:outline-none w-full h-10 pl-2 rounded-sm ${
                    errorMessage.name ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formValues.name}
                />
                {errorMessage.name && (
                  <span className="text-gray-300 font-bold">
                    {errorMessage.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 text-[14px] w-1/2">
                <label className="block font-bold text-[14px] " htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="e.g. text@gmail.com"
                  className={`border-2 border-gray-300 focus:border-gray-500 focus:outline-none w-full h-10 pl-2 rounded-sm ${
                    errorMessage.email ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  value={formValues.email}
                />
                {errorMessage.email && (
                  <span className="text-gray-300 font-bold">
                    {errorMessage.email}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[14px]">
              <label className="block font-bold text-[14px]" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message here..."
                rows={5}
                cols={10}
                className={`border-2 border-gray-300 focus:border-gray-500 focus:outline-none pl-2 w-full rounded-sm ${
                  errorMessage.message ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                value={formValues.message}
              ></textarea>
              {errorMessage.message && (
                <span className="text-gray-300 font-bold">
                  {errorMessage.message}
                </span>
              )}
            </div>
          </div>
          <button
            className={`p-3 hover:border-black/50 hover:text-black/50 border-2 border-[#d2e9b3] rounded-full w-auto font-bold text-start mr-auto cursor-pointer flex ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
          {submitStatus === "success" && (
            <p className="text-green-500 font-bold">
              Wiadomość została wysłana pomyślnie!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 font-bold">
              Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
            </p>
          )}
        </form>
        <div className="border-2 border-gray-300"></div>
        <div className="flex flex-col gap-2 pt-4">
          <p className="font-bold">Socials</p>
          <Link href="/">
            <Image src="/icons/xIcon.svg" width={24} height={24} alt="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessageMe;
