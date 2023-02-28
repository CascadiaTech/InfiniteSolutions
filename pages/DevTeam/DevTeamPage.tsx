import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import city from "../../assets/images/city.jpeg";
import d82Logo from "../../assets/images/D-82logo.png";
import ginuLogo from "../../assets/images/ginuLogo.png";
import tbilogo from "../../assets/images/TBIlogo.png";
import RuneStonelogo from "../../assets/images/RuneStonelogo.png";
import ScrollpositionAnimation from "../../hooks/OnScroll";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

export default function DevTeam() {
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
          <p style={{ fontFamily: 'Equinox' }} className="text-3xl text-gray-100 sm:text-4xl md:text-5xl">
              Here are past projects we have developed
            </p>

            <p className="mb-6 text-lg font-normal text-white-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white-400">
              Here are a few apps that InfiniteSolutions has developed. District 82 is a meme token with a token 
              reflections mechanism and metaverse coming soon. GiveWellINU is an NFT collection with a reflections mechanism. 
              TwitterBlueINU is a simple meme token with a reflections mechanism, TBI Buyers are meant to use their reflections
              to purchase their own TwitterBlue subscription that was recently released. RuneStone is a "viking based" NFT 
              collection that allows people to pretend to be a viking.

            </p>
          </div>
          <div className="flex space-y-8 my-20 js-show-on-scroll">
            <div className="sm:flex flex-col md:flex flex-col lg:flex-row mx-auto justify-center">
              <div className="p-6 mb-10 text-center justify-center max-w-sm rounded-xl border-2 border-cyan-500 shadow-md">
                <Image className="" src={d82Logo} alt=""></Image>
                <a href="https://district82.vercel.app/">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-600">
                    The District 82
                  </h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-300">
                  The District82 is all about bringing fans to games
                </p>
                  <a href="https://district82.vercel.app/">
                <button
                  type="button"
                  className="text-white text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Go see the App
                </button>
                </a>
              </div>

              <p className={"px-10"}></p>

              <div className="p-6 mb-10 text-center justify-center max-w-sm rounded-xl border-2 border-cyan-500 shadow-md">
                <Image className="" src={ginuLogo} alt=""></Image>
                <a href="https://give-well-inu.vercel.app/">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-600">
                    GiveWellINU
                  </h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-300">
                  GiveWell gives to the people and the to company
                </p>
                <a href="https://give-well-inu.vercel.app/">
                <button
                  type="button"
                  className="text-white text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Go see the App
                </button>
                </a>
              </div>

              <p className={"px-10"}></p>

              <div className="p-6 mb-10 text-center justify-center max-w-sm rounded-xl border-2 border-cyan-500 shadow-md">
                <Image className="" src={tbilogo} alt=""></Image>
                <button className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-600">
                    TwitterBlueINU
                <a href="https://twitterblueinu.vercel.app/"></a>
                </button>
                <p className="mb-3 font-normal text-center text-gray-300">
                  Twitter Blue INU is a fan based meme token
                </p>
                <a href="https://twitterblueinu.vercel.app/">
                <button
                  type="button"
                  className="text-white text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Go see the App
                </button>
                </a>
              </div>

              <p className={"px-10"}></p>

              <div className="p-6 mb-10 text-center justify-center max-w-sm rounded-xl border-2 border-cyan-500 shadow-md">
                <Image className="" src={RuneStonelogo} alt=""></Image>
                <a href="https://runestonenft.vercel.app/">
                  <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-600">
                    RuneStone
                  </h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-300">
                  A viking-based NFT collection
                </p>
                <a href="https://runestonenft.vercel.app/">
                <button
                  type="button"
                  className="text-white text-lg bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Go see the App
                </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
}
