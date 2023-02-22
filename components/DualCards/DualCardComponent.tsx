import "tailwindcss-elevation";
import React, { useEffect, useState } from "react";
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
            <a href="#">
              <h5 style={{ fontFamily: 'Equinox' }}
               className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Development skills
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
              From creating UI web components for your application for style and layout to 
              coding creative smart contracts for your web3 functionality. We can program everything you need.
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <p className={'px-4'}></p>
          <p className={'py-4'}></p>

          <div className="p-6 max-w-sm rounded-xl border-4 border-cyan-600 elevation-10 shadow-md">
            <a href="#">
              <h5 style={{ fontFamily: 'Equinox' }}
               className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Upgrade your marketing game. Manage your communities
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-200">
              If you would like help on managing your communities, spreading the word of your new idea
              or bringing hype to your platform. Our company has marketers and community mangers that could assist.
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <p className={'px-4'}></p>
          <p className={'py-4'}></p>

          <div className="p-6 max-w-sm elevation-10 rounded-xl border-4 border-cyan-600 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 style={{ fontFamily: 'Equinox' }}
              className="mb-2 text-2xl font-bold text-gray-100 dark:text-white">
                Contact us for any project needs or ideas
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-200">
              We are always welcome to a new idea or project. There is no such thing as being too busy!
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
