//import { de}
import React, { useEffect } from "react";
import Image from "next/image";
import city3Backwards from "../../assets/images/city3Backwards.png";
import ScrollpositionAnimation from "../../hooks/OnScroll";

export default function AboutusComponent() {
  if (typeof window !== "undefined") {
    useEffect(() => {
      // Update the document title using the browser API
      ScrollpositionAnimation();
    }, [window.scrollY]);
    useEffect(() => {
      async function scrollpositionAnimationleft() {
        const targets = document.querySelectorAll(".js-show-on-scroll-left");
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
            // Is the element in the viewport?
            if (entry.isIntersecting) {
              // Add the fadeIn class:
              entry.target.classList.add("motion-safe:animate-fadeinleft");
            } else {
              // Otherwise remove the fadein class
              entry.target.classList.remove("motion-safe:animate-fadeinleft");
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
        //ScrollpositionAnimation();
      }
      async function scrollpositionAnimationright() {
        const targets = document.querySelectorAll(".js-show-on-scroll-right");
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
            // Is the element in the viewport?
            if (entry.isIntersecting) {
              // Add the fadeIn class:
              entry.target.classList.add("motion-safe:animate-fadeinright");
            } else {
              // Otherwise remove the fadein class
              entry.target.classList.remove("motion-safe:animate-fadeinright");
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
        //ScrollpositionAnimation();
      }
    });

    //<div className="z-10 mt-80 absolute">
    //      <Image
    //        className="object-cover"
    //        src={city3Backwards}
    //        height={1800}
    //        width={1950}
    //        alt=""
    //      ></Image>
    //</div>
    return (
      <>
        <div className={"sm:mx-6 md:mx-12 lg:mx-24"}>
          <div className={"flex flex-col lg:flex-row justify-center mx-auto"}>
            <div
              className={
                "flex-col text-center justify-center rounded-2xl border-4 border-indigo-200/[.001] border-r-cyan-500 border-b-cyan-500 border-l-cyan-500 mx-2 js-show-on-scroll tn:px-3 sm:px-4 md:px-7 lg:px-10"
              }
              style={{
                boxShadow:
                  "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
              }}
            >
              <h1
                style={{ fontFamily: "Equinox" }}
                className={"text-center text-3xl md:text-4xl"}
              >
                Who are we?
              </h1>
              <p className={"text-center text-xl"}>
                What started as a passion for web3 and solving problems has
                turned into an international team of developers seeking to
                create the next future of finance and consumer spending. We are
                a team who love to solve hard problems, and to stretch the
                bounds of what can be done. Web3 changes the form of the
                Internet, there is a change in the air in the way consumers will
                spend their money. Consumers spend money to preserve their
                identity, whether its donating to a charity or purchasing a
                baseball shirt. Our world is getting increasingly digital, as
                are our identities. We see NFTs and web3 as a reaction to that.
                A unique opportunity to capitalize on the future is in our
                hands, let us help you take advantage of it as we do.
              </p>
              <button
                style={{ fontFamily: "Exan-regular" }}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
              >
                Click here to see more about us
              </button>
            </div>

            <p className={"my-6"}></p>
            <p className={"md:mx-6 lg:mx-16"}></p>

            <div
              className={
                "flex-col text-center justify-center rounded-2xl border-4 border-indigo-200/[.001] border-r-cyan-500 border-b-cyan-500 border-l-cyan-500 mx-2 js-show-on-scroll tn:px-3 sm:px-4 md:px-7 lg:px-10"
              }
              style={{
                boxShadow:
                  "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
              }}
            >
              <h1
                style={{ fontFamily: "Equinox" }}
                className={"text-center text-3xl md:text-4xl"}
              >
                What we do?
              </h1>
              <p className={"text-center text-xl"}>
                At InfiniteSolutions, Our team has combined experience in taking
                applications from idea to a finished masterpiece. From designing
                the initial concept, to deploying to your production
                environment, we have done it. Our specialization is in Web3
                projects, our preferred front-end language ReactJS is used
                throughout the industry so your app can scale. We also pride
                ourselves on writing innovative smart contracts to suit your
                unique business idea.
              </p>
              <button
                style={{ fontFamily: "Exan-regular" }}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
              >
                Click here to see past projects
              </button>
            </div>
          </div>

          <p className={"my-12"}></p>
          <p className={"md:my-12 lg:my-24"}></p>

          <div
            style={{
              boxShadow:
                "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
            }}
            className="flex-col text-center justify-center rounded-2xl border-4 border-indigo-200/[.001] border-r-cyan-500 border-b-cyan-500 border-l-cyan-500 js-show-on-scroll tn:px-3 sm:px-4 md:px-7 lg:px-10"
          >
            <h1
              style={{ fontFamily: "Equinox" }}
              className="text-3xl md:text-4xl text-center js-show-on-scroll"
            >
              How we can help you?
            </h1>
            <p className={"text-center text-xl mx-4 px-6"}>
              We offer many services in web3 development, community management,
              business consulting, web application design and marketing. Whether
              the task involves developing new crypto applications such as
              regular token contracts, NFT collections, DAO/governance
              contracts, staking platforms, swaps, etc. We can meet all your
              development needs. If you need help managing your community or
              marketing, we can hire a community moderator for your social media
              app or develop a marketing strategy to reach thousands of people
              with your app.{" "}
            </p>
            <button
              style={{ fontFamily: "Exan-regular" }}
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 my-4"
            >
              Click here for a quote
            </button>
          </div>
        </div>

        <p className={"my-20"}></p>
      </>
    );
  }
}
