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
          <div className="py-16 md:py-24 lg:py-16 px-4 mx-auto max-w-screen-md">

            <section className="bg-black">
              <div className="py-28 md:py-24 lg:py-16 px-4 mx-auto max-w-screen-md">
              <p
              style={{ fontFamily: "Equinox" }}
              className="text-center text-4xl text-gray-100 sm:text-5xl md:text-6xl"
            >
              Contact Us
            </p>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 dark:text-gray-400 sm:text-xl">
              If you are interested in our services, please use the contact form below and one of our team members will get into contact with you. 
              If you are interested in a proposal, please give a detailed explaination of your idea below. 
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
                    className={'bg-black'}
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
                    className={'bg-black'}
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
                    className={'bg-black'}
                      onChange={(e) => setmessage(e.target.value)}
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Message"
                    ></input>
                  </div>
                    {!message && !emails && (
                      <p
                      className={'justify-center mx-auto text-center font-bold text-xl rounded-xl border border-white bg-black px-4 py-2'}
                     
                      >
                        {" "}
                        Please enter message
                      </p>
                    )}
                    {message && emails && (
                      <input className={'justify-center w-full mx-auto text-center font-bold text-xl rounded-xl border border-white bg-black px-4 py-2 transition-all duration-500 hover:cursor-pointer hover:bg-gray-600 hover:text-black'}
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
