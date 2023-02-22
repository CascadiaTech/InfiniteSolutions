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
  }

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
    <div className={'sm:mx-6 md:mx-12 lg:mx-24'}>
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
          <h1 style={{ fontFamily: 'Equinox' }} className={"text-center text-3xl md:text-4xl"}>
            Who are we?
          </h1>
          <p className={"text-center text-xl"}>Real estate has also always had a high entry cost, forbidding many from
          being able to enter. Additionally, liquidity has also always been a
          significant challenge within the market. Our primary objective here at
          REX is to bring to accessibility and liquidity to the real estate
          market.</p>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4">Click here to know more!</button>
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
          <h1 style={{ fontFamily: 'Equinox' }} className={"text-center text-3xl md:text-4xl"}>
            What we do?
          </h1>
          <p className={"text-center text-xl"}>estate has also always had a high entry cost, forbidding many from
          being able to enter. Additionally, liquidity has also always been a
          significant challenge within the market. Our primary objective here at
          REX is to bring to accessibility and liquidity to the real estate
          market.</p>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4">Click here to see more!</button>
        </div>
      </div>

      <p className={"my-12"}></p>
      <p className={"md:my-12 lg:my-24"}></p>

      <div
        style={{
          boxShadow:
            "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
        }}
        className="flex-col text-center justify-center rounded-2xl border-4 border-indigo-200/[.001] border-b-cyan-500 js-show-on-scroll tn:px-3 sm:px-4 md:px-7 lg:px-10"
      >
        <h1 style={{ fontFamily: 'Equinox' }} className="text-3xl md:text-4xl text-center js-show-on-scroll">
          How we can help you?
        </h1>
        <p className={'text-center text-xl mx-4 px-6'}>estate has also always had a high entry cost, forbidding many from
          being able to enter. Additionally, liquidity has also always been a
          significant challenge within the market. Our primary objective here at
          REX is to bring to accessibility and liquidity to the real estate
          market.</p>
          <button type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4">Click here for Quote!</button>
      </div>
      </div>

      <p className={"my-20"}></p>
    </>
  );
}
