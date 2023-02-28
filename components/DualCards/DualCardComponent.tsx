import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { animated } from "react-spring";
import { useSpring } from "react-spring/web";
import ScrollpositionAnimation from "../../hooks/OnScroll";
export default function DualCardComponent() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
  }
  return (
    <div className={''}>
      <div className="-my-20 js-show-on-scroll justify-center ">
        
        <div className="flex flex-col md:flex-row mx-auto justify-center">
          <div className="p-6 max-w-sm elevation-10 rounded-xl border-4 border-cyan-600	shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 style={{ fontFamily: 'Equinox' }}
               className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Development skills
              </h5>
            <p className="mb-3 text-xl text-gray-200 dark:text-gray-400">
              From creating UI web components for your application for style and layout to 
              coding creative smart contracts for your web3 functionality. We can program everything you need.
            </p>
            <Link href="/DevTeam/DevTeamPage"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              
              <button
                style={{ fontFamily: "Exan-regular" }}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
              >
                Come View more
              </button>
            </Link>
          </div>

          <p className={'px-4'}></p>
          <p className={'py-4'}></p>

          <div className="p-6 max-w-sm rounded-xl border-4 border-cyan-600 elevation-10 shadow-md">
              <h5 style={{ fontFamily: 'Equinox' }}
               className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Upgrade your marketing game. Manage your communities
              </h5>
            <p className="mb-3 font-normal text-xl text-gray-200 dark:text-gray-200">
              If you would like help on managing your communities, spreading the word of your new idea
              or bringing hype to your platform. Our company has marketers and community mangers that could assist.
            </p>
            <Link href="/Web3Marketing/Marketing"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              
              <button
                style={{ fontFamily: "Exan-regular" }}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
              >
                Come View More
              </button>
            </Link>
          </div>

          <p className={'px-4'}></p>
          <p className={'py-4'}></p>

          <div className="p-6 max-w-sm elevation-10 rounded-xl border-4 border-cyan-600 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 style={{ fontFamily: 'Equinox' }}
              className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Contact us for any project needs or ideas
              </h5>
            <p className="mb-3 font-normal text-xl text-gray-200 dark:text-gray-200">
              We are always welcome to a new idea or project. There is no such thing as being too busy!
            </p>
            <Link href="/ContactUs/ContactUsForm"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              
              <button
                style={{ fontFamily: "Exan-regular" }}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
              >
                Come View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
