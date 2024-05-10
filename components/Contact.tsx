"use client";

import emailjs from "@emailjs/browser";
import "dotenv/config";
import React, { useRef, useState } from "react";

const Contact = () => {
  const form = useRef(null);
  const [selected, setSelected] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [sent, setSent] = useState(false);
  const [disable, setDisable] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sent) return;
    setSent(true);
    const formRef = form.current || "";
    // enable recaptcha
    email(formRef);
  };
  function email(formRef: string) {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        "template_2aoc6kp",
        formRef,
        {
          publicKey: "Jk6oS_ur4kolYSl5n",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailInput("");
          setContentInput("");
          setSelected(false);
          setSent(false);
          setDisable(true);
          setTimeout(() => {
            setDisable(false);
          }, 1000 * 30);
        },
        (error) => {
          console.log("FAILED...", error);
          setSent(false);
        }
      );
  }

  return (
    <section
      id="contact"
      className="h-[100vh] w-[100%] grid bg-[url('../assets/background-images/bg.jpg')] snap-start"
    >
      <div
        onClick={() => {
          setSelected((prev) => !prev);
        }}
        className="self-end xl:self-end justify-self-center drop-shadow-custom"
      >
        <div className="relative bg-black w-[400px] md:w-[600px] xl:w-[800px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="flex flex-col items-center py-5 justify-start bg-white w-[99%] h-[99%] absolute"></div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`transition-all bg-white ease-in-out flex flex-col items-center py-5 justify-start w-[99%] h-[99%] absolute ${
              selected ? "-translate-y-16 duration-[2000ms]" : " duration-300"
            }`}
          >
            <p
              className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Send email
            </p>
            <label
              onClick={(e) => {
                e.stopPropagation();
              }}
              htmlFor="user_email"
              className="text-xs sm:text-sm font-semibold text-gray-500 font-serif"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmailInput(e.target.value)}
              value={emailInput}
              onClick={(e) => {
                e.stopPropagation();
              }}
              name="user_email"
              type="email"
              placeholder="Email"
              className="w-60"
              required
            ></input>

            <label
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="text-xs sm:text-sm font-semibold text-gray-500 font-serif"
              htmlFor="message"
            >
              Content
            </label>
            <textarea
              onChange={(e) => setContentInput(e.target.value)}
              value={contentInput}
              required
              onClick={(e) => {
                e.stopPropagation();
              }}
              name="message"
              placeholder="Content"
              className="mt-2 w-60 resize-none"
            ></textarea>
            <button
              disabled={disable}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Send
            </button>
          </form>
          <p
            className={`bg-rose-500 select-none text-red-800 w-12 md:w-14 xl:w-16 aspect-square rounded-full z-40 text-[10px] md:text-[14px] xl:text-[18px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] transition-all duration-1000 border-4 border-rose-900 ${
              selected ? "rotate-180 scale-0 opacity-0" : ""
            }`}
          >
            Email
          </p>
          <div
            className={`transition-all  delay-200 ease-out bg-neutral-800 absolute w-full h-full  ${
              selected
                ? "duration-100 [clip-path:polygon(50%_0%,_100%_0,_0_0)]"
                : "duration-1000 [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            }`}
          ></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>

      <div className="w-full h-[30%]  bg-gradient-to-r to-myLightblue from-myDarkBlue border-t-myDarkBlue border-t-2 self-end flex justify-around items-center">
        <p className="text-white font-semibold text-lg">Phone number</p>
        <p className="text-white font-semibold text-lg ">Location link</p>
        <p className="text-white font-semibold text-lg ">Facebook</p>
      </div>
    </section>
  );
};

export default Contact;
