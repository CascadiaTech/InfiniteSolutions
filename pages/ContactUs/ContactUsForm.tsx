import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function ContactUsFormPage() {
  const [message, setmessage] = useState(String);
  const [emails, setemail] = useState(String);
  const [subject, setsubject] = useState(String);

  const SERVICE_ID = "service_pbjqier";
  const TEMPLATE_ID = "contact_form";
  const USER_ID = "iBjsKXibozEgEn3zJ";

  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current as unknown as string,
        USER_ID
      )
      .then(
        (result: any) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error: any) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
          });
        }
      );
  };

  return (
    <div className={"bg-black"}>
      <HeaderComponent></HeaderComponent>
      <main className={styles.main}>
        <section className="bg-black">
          <div className="py-40 md:py-24 lg:py-16 px-4 mx-auto max-w-screen-md">

            <section className="bg-black">
              <div className="py-40 md:py-24 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2
              style={{ fontFamily: "Exan-regular" }}
              className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100"
            >
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 dark:text-gray-400 sm:text-xl">
              If you are an investor interested in learning more, or a client
              with feedback please contact us using the form below!
            </p>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                  <div>
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      onChange={(e) => setemail(e.target.value)}
                      type="text"
                      id="from_email"
                      name="from_email"
                      placeholder="anyone@anywhere.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      onChange={(e) => setsubject(e.target.value)}
                      type="text"
                      id="subject"
                      name="Subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <input
                      onChange={(e) => setmessage(e.target.value)}
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></input>
                  </div>
                    {!message && !emails && (
                      <p
                        className={"Form-button"}
                        style={{
                          fontFamily: "montserrat, sans-serif",
                          fontSize: "calc(3 * (0.25vw + 0.25vh))",
                        }}
                      >
                        {" "}
                        Please enter message
                      </p>
                    )}
                    {message && emails && (
                      <input
                        style={{
                          fontSize: "calc(3 * (0.25vw + 0.25vh))",
                          fontFamily: "montserrat, sans-serif",
                        }}
                        className={"Form-button-input"}
                        type="submit"
                        value="Submit"
                      />
                    )}
                </form>
              </div>
            </section>
          </div>
        </section>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}
