import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import city from "../../assets/images/city.jpeg";
import ScrollpositionAnimation from "../../hooks/OnScroll";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

export default function Web3Marketing() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }
  return (
    <>
      <div>
        <HeaderComponent></HeaderComponent>
        <main className={styles.main}>
          <div className="flex flex-col text-center mt-48 justify-center">
            <p
              style={{ fontFamily: "Equinox" }}
              className="text-4xl text-gray-100 sm:text-5xl md:text-6xl"
            >
              Marketing Stuff Goes Here <br /> "(xxxx)"
            </p>
            <Link href="/ContactUs/ContactUsForm">
              <a
                style={{ fontFamily: "Exan-regular" }}
                className="flex w-full elevation-10 items-center text-lg justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-gray-200 hover:bg-gray-600 md:py-4 md:px-10 md:text-lg js-show-on-scroll"
              >
                Contact Us
              </a>
            </Link>
          </div>
          <div className="flex space-y-8 my-20 js-show-on-scroll">
            <div className="sm:flex flex-col md:flex flex-col lg:flex-row mx-auto justify-center"></div>
          </div>
        </main>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
