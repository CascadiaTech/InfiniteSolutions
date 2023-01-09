//import 'tw-elements'
import "tailwindcss-elevation";
//import { Stickynavbar } from 'flowbite-react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ConnectWallet } from '../Web3Modal/WalletConnect'
export default function HeaderComponent() {
  //    backgroundImage: `url(${backgroundimage})`,

  return (
    <div>
      <nav style={{ boxShadow: "inset 0px -8px 14px 5px rgba(66,35,255,0.4), inset 0px -9px 14px 5px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5), 0px 10px 14px 2px rgba(14,101,255,0.5)",
        }}
       className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-4 border-indigo-200/[.001] border-b-cyan-500">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex md:order-2">
            <ConnectWallet></ConnectWallet>
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-row p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link href="/">
                  <p style={{ fontFamily: 'Exan-regular' }}
                    className="cursor-pointer block py-2 pr-4 pl-3 text-white text-lg rounded md:bg-transparent hover:text-blue-700 active:text-blue-700 focus:text focus:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Home{" "}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/DevTeam/DevTeamPage">
                  <button style={{ fontFamily: 'Exan-regular' }}
                    className="cursor-pointer block py-2 pr-4 pl-3 text-white text-lg rounded hover:text-blue-700 active:text-blue-700 focus:text focus:text-blue-700 md:p-0"
                  >
                    Web3 Development{" "}
                  </button>
                </Link>
              </li>
              <li>
              <Link href="/AboutUs/AboutusPage">
                  <p style={{ fontFamily: 'Exan-regular' }} className=" cursor-pointer block py-2 pr-4 pl-3 text-white text-lg rounded hover:text-blue-700 active:text-blue-700 focus:text focus:text-blue-700 md:p-0">
                    About Us
                  </p>
                </Link>
              </li>
              <li>
              <Link href="/ContactUs/ContactUsForm">
                  <p style={{ fontFamily: 'Exan-regular' }} className=" cursor-pointer block py-2 pr-4 pl-3 text-white text-lg rounded md:p-0 hover:text-blue-700 active:text-blue-700 focus:text focus:text-blue-700">
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
