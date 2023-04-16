import React from "react";
import Link from "next/link";
import Logo from "../images/logofinal.png";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faLinkedInIn } from "@fortawesome/free-solid-svg-icons";
import Face from './Face'

const Footer = () => {

  return (
    <footer className="px-10 py-3 bg-[#CDE2D9] flex flex-col lg:flex-row items-center justify-between text-sm ">
      <div className="flex flex-col lg:flex-row items-center space-between mb-4 lg:mb-0 md:mb-5">
        <div className="item-icon">
          <a
            href="https://www.facebook.com/profile.php?id=100087454669404"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Face className="fab" />
          </a>
        </div>
        <Image src={Logo} alt="" height="50" />
        <span className="text-base font-semibold ml-4 lg:ml-0 lg:mr-4">
          Contact us
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <span className=" cursor-pointer hover:text-[#EF8A29] text-base mb-4 sm:mb-0 lg:mb-0 mr-4">
          ♥️ Made by ♥️
          <Link
            className="link "
            href="https://www.facebook.com/profile.php?id=100080322847763&sk=about"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <b>Salma</b>{" "}
          </Link>
        </span>
        <div className="item-icon ml-4">
          <a
            href="https://www.facebook.com/profile.php?id=100080322847763&sk=about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Face className="fab" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
