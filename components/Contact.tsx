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
      className="h-[100vh] w-[100%] absolute top-0 left-0 overlay bg-secondary flex justify-center items-end pb-[4%] sm:pb-[1%]"
    >
      <div id="notebook-paper" className="h-[85%] w-[60%] ">
        <header className="h-1/5 w-full bg-[#c9c9c3] absolute top-0 left-0 z-[2]">
          <h1 className="text-black  hand-written drop-shadow-custom font-semibold text-2xl md:text-4xl md:leading-[42px] mt-9 md:mt-8 ml-[10%]">
            Get in touch
          </h1>
        </header>
        <div className="text-black left-[10.5%] top-[20%] leading-[30px] absolute drop-shadow-white">
          <p className="hand-written">
            {"Visit us at: "}
            <a
              target="blank"
              href="https://earth.google.com/web/search/NVIDIA+Headquarters,+San+Tomas+Expressway,+Santa+Clara,+CA,+USA/@37.37061431,-121.96718571,34.41619515a,665.89766774d,35y,-28.93143153h,32.48520397t,0r/data=CqsBGoABEnoKJTB4ODA4ZmNhMjcwMmM0ODBkYjoweDc2NTI3ODQ3Yjk1ZTA4YzkZkQgyp3CvQkAhbIJebuZ9XsAqP05WSURJQSBIZWFkcXVhcnRlcnMsIFNhbiBUb21hcyBFeHByZXNzd2F5LCBTYW50YSBDbGFyYSwgQ0EsIFVTQRgCIAEiJgokCTkAdFXcKytAEdT25EkkBCtAGbO_yYWv9x1AIfttnh7wrR1AOgMKATA"
              className=" underline hand-written"
            >
              {"Location link"}
            </a>
          </p>
          <p className="hand-written">
            {"Want to be our client? Give us a call 0911232441"}
          </p>
          <p className="hand-written">
            {"Check what we are up to in our page at "}
            <a
              target="blank"
              href="https://www.facebook.com/zuck/"
              className=" underline hand-written"
            >
              {"  Facebook"}
            </a>
          </p>
        </div>
      </div>

      <div
        onClick={() => {
          setSelected((prev) => !prev);
        }}
        className="overflow-visible bottom-[13%] translate-y-12 rounded-2xl drop-shadow-custom_black absolute z-[5]"
      >
        <div className="relative bg-[#413f3f] select-none rounded-2xl   w-[80vw] sm:w-[50vw] max-w-[600px] overflow-visible group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="bg-white w-[98%] bottom-0 rounded-2xl h-[50%] absolute"></div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`transition-all bg-white rounded-2xl overflow-hidden ease-in-out flex flex-col items-center  justify-start w-[95%] h-[90%] absolute ${
              selected
                ? "md:-translate-y-[52%] -translate-y-[52%] duration-[2000ms]"
                : " duration-300"
            }`}
          >
            <p
              className="text-[10px] md:text-[16px] mt-2 h-[18%]  font-semibold text-[#0e1618]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Send email
            </p>
            <input
              onChange={(e) => setEmailInput(e.target.value)}
              value={emailInput}
              onClick={(e) => {
                e.stopPropagation();
              }}
              name="user_email"
              type="email"
              placeholder="Email"
              className="w-[70%] md:w-[80%] h-[13%] mb-3 text-[10px] md:text-[12px] "
              required
            ></input>
            <textarea
              onChange={(e) => setContentInput(e.target.value)}
              value={contentInput}
              required
              onClick={(e) => {
                e.stopPropagation();
              }}
              name="message"
              placeholder="Content"
              className="w-[70%] md:w-[80%] h-[25%] pb-3 text-[10px] md:text-[12px] "
            ></textarea>
            <button
              className="text-[#0e1618] text-[13px]  border-b-2 hover:border-[#0e1618] hover:font-semibold"
              disabled={disable}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Send
            </button>
          </form>
          <p
            className={`bg-[#742525] select-none text-[#a5a5a5] w-[15%] md:w-[10%]  aspect-square rounded-full z-40 text-[60%] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] transition-all duration-1000 border-4 border-[#491414] ${
              selected ? "rotate-180 scale-0 opacity-0" : ""
            }`}
          >
            Email
          </p>
          <div
            className={`transition-all rounded-t-2xl  delay-200 ease-out bg-[#151f22] absolute w-full h-full  ${
              selected
                ? "duration-100 [clip-path:polygon(50%_0%,_100%_0,_0_0)]"
                : "duration-1000 [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            }`}
          ></div>
          <div className="lft transition-all  rounded-l-2xl  duration-700 absolute w-full h-full bg-[#0e1618] [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all   rounded-r-2xl duration-700 absolute w-full h-full bg-[#151f22] [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all rounded-b-2xl  duration-700 absolute w-full h-full bg-[#0e1618] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
