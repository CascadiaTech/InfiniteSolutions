import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import Link from "next/link";
import blueGraphic from "../assets/images/Blue-graphic.jpg"
import city from "../assets/images/city.jpeg";
import city3 from "../assets/images/city3.png";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect } from "react";
import Rex_logo_small from "../assets/images/Rex_logo_small.png";
import AboutusComponent from "../components/Aboutus/AboutusComponent";
const Home: NextPage = () => {
  //if (typeof window !== "undefined") {
  //  useEffect(() => {
  // Update the document title using the browser API
  //   ScrollpositionAnimation();
  // }, [window.scrollY]);
  /// }

  useEffect(() => {
    async function ScrollpositionAnimation() {
      const targets = document.querySelectorAll(".js-show-on-scroll");
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
          }
        });
      });
      // Loop through each of the target
      targets.forEach(function (target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
      });
      ScrollpositionAnimation();
    }
  });

  // <Image
  //             className="object-cover"
  //             src={city3}
  //             height={1600}
  //             width={1950}
  //             alt=""
  //           ></Image>

  return (
    <div className={"bg-black"}>
      <div>
        <main className={styles.main}>
          <header>
            {" "}
            <HeaderComponent></HeaderComponent>
          </header>
          <div className="flex flex my-20 col justify-center mx-auto max-w-full w-screen py-20 md:py-12 lg:py-8">
            <div className="absolute z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-52">
              <main className="mx-auto px-4 js-show-on-scroll">
                <div className="sm:text-center text-center lg:text-center">
                  <p className="text-4xl text-gray-100 sm:text-5xl md:text-6xl">
                    <span style={{ fontFamily: 'Equinox' }} className="block xl:inline">Infinite Solutions</span>
                  </p>
                  <p style={{ fontFamily: 'Exan-regular' }} className="mt-4 text-center justify-center mx-auto text-2xl text-gray-300">
                    Bringing Excellent Solutions <br /> For Difficult Problems
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                    <div className="rounded-md shadow">
                      <Link href="/AboutUs/AboutusPage">
                        <a style={{ fontFamily: 'Exan-regular' }} className="flex w-full items-center elevation-10 justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                          About Us
                        </a>
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/ContactUs/ContactUsForm">
                        <a style={{ fontFamily: 'Exan-regular' }} className="flex w-full elevation-10 items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg js-show-on-scroll">
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <DualCardComponent></DualCardComponent>

          <Image className={'z-0 relative'} src={blueGraphic} alt=""></Image>
          <p className={"my-40"}></p>
          <AboutusComponent></AboutusComponent>
        </main>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;
//<footer className={styles.footer}>

//          <span className={styles.logo}>
//<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//</span>
