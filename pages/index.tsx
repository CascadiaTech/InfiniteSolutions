import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import Link from "next/link";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect } from "react";
import InfiniteSolutionsLogo from "../public/InfiniteSolutionsLogo.jpg"
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
          <div className="flex flex my-20 col justify-center mx-auto max-w-full w-screen">
            <div className="pb-8 sm:pb-16 md:pb-20 ">
              <main className="mx-auto px-4">
                <div className="sm:text-center js-show-on-scroll text-center tn:mt-12 sm:mt-10 md:mt-2 lg:mt-0 lg:text-center ">
                <div className={'flex flex-col justify-center mx-auto sm:w-1/2 sm:h-1/2 lg:w-1/3 lg:h-1/3'}>
                <Image src={InfiniteSolutionsLogo}></Image>
                </div>
                  <p className="text-4xl text-gray-100 sm:text-5xl md:text-6xl">
                    <span
                      style={{ fontFamily: "Equinox" }}
                      className="block xl:inline"
                    >
                      Infinite Solutions
                    </span>
                  </p>
                  <p
                    style={{ fontFamily: "Exan-regular" }}
                    className="mt-1 text-center justify-center mx-auto text-2xl text-gray-300"
                  >
                    Bringing Excellent Solutions <br /> For Difficult Problems
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                    <div className="rounded-md shadow">
                      <Link href="/AboutUs/AboutusPage">
                        <a
                          style={{ fontFamily: "Exan-regular" }}
                          className="flex w-full items-center elevation-10 justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                        >
                          About Us
                        </a>
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/ContactUs/ContactUsForm">
                        <a
                          style={{ fontFamily: "Exan-regular" }}
                          className="flex w-full elevation-10 items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg js-show-on-scroll"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    "flex flex col mx-auto justify-center text-center my-32"
                  }
                >
                  <DualCardComponent></DualCardComponent>
                </div>
              </main>
            </div>
          </div>
          <p className={""}></p>
          <div className={"flex flex col mx-auto justify-center text-center"}>
            <AboutusComponent></AboutusComponent>
          </div>
        </main>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Home;

//TEAM SECTION
//<h1 style={{ fontFamily: 'Equinox' }} className={"js-show-on-scroll text-center text-3xl md:text-4xl"}>
//Here is our Team
//</h1>
//<div
//className={
//"flex flex-row text-center justify-center mx-24 my-10 px-10 py-16 rounded-2xl border-indigo-200/[.001] border-r-cyan-500 border-b-2 border-b-cyan-500 border-l-cyan-500 mx-2 js-show-on-scroll tn:px-3 sm:px-4 md:px-7 lg:px-10"
//}
//style={{
//boxShadow:
//  "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
//}}>
//<Image width={100} height={100} src={profpic}></Image>
//<p className={"px-10"}></p>
//<Image width={100} height={100} src={profpic}></Image>
//<p className={"px-10"}></p>
//<Image width={100} height={100} src={profpic}></Image>
//<p className={"px-10"}></p>
//<Image width={100} height={100} src={profpic}></Image>
//<p className={"px-10"}></p>
//<Image width={100} height={100} src={profpic}></Image>
//</div>
