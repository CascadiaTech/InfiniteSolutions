import React, { useEffect } from "react";
import Image from "next/image";
import city from "../../assets/images/city.jpeg";
import ScrollpositionAnimation from "../../hooks/OnScroll";
import styles from "../../styles/Home.module.css";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

export default function Aboutus() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main className={styles.main}>
        <div className="flex flex-col text-center mt-48 justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us
          </h1>
          <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl mx-6 px-4 sm:px-16 xl:px-48 dark:text-white-400">
          We are a team of talented individuals looking to make a difference in Web3. Our industry is seen in a negative light by too many people, and we are here to change that. By bringing professionalism to the industry,
          delivering unique utilities, and presenting them through sound marketing strategies. We have a full team of graphic designers, 3D animators, 2D illustrators, content writers, public speakers, and developers ready to take your concept
          and turn it into reality. Join Infinite Solutions on our journey to elevate Web3. 
          </p>
        </div>
        <div className="flex space-y-8 my-20 js-show-on-scroll">
          <div className="flex flex-col md:flex-row mx-auto justify-center">
            <div className="p-6 max-w-sm my-6 bg-white rounded-lg border border-gray-200">
              <svg
                className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Communicative
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                We like to integrate with your team and vision, to get a true understanding of what your idea is all about, we pride ourselves on our
                ability to communicate complex concepts and ideas.
    
              </p>
            </div>

            <p className={"px-10"}></p>

            <div className="p-6 max-w-sm bg-white my-6 rounded-lg border border-gray-200">
              <svg
                className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Efficient
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Our timelines are reasonable, and we stick to them. We have talented team members that are dedicated to their craft to make your project a success
              </p>
            </div>

            <p className={"px-10"}></p>

            <div className="p-6 max-w-sm bg-white my-6 rounded-lg border border-gray-200">
              <svg
                className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Innovative
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-grey-400">
               We like to stretch the bounds of what is possible, and let our creative sides shine. If you have a unique concept that needs to be thought out
               We can be there for you to consult on the best path forward as subject-matter-experts.
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
}
