import React from "react";
import Link from "next/link";
import Logo from "../images/logofinal.png";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faLinkedInIn } from "@fortawesome/free-solid-svg-icons";
import Face from './Face'

const Footer = () => {

  return (
    <footer className="mt-100 px-10 py-3 bg-[#CDE2D9] flex items-center justify-between text-sm">
      <div className="flex items-center space-between">
        <Image src={Logo} alt="" height="50" />
        <span className="text-base font-semibold">Contact us</span>
        <div className="item-icon">
          <a
            href="https://www.facebook.com/profile.php?id=100087454669404"
            target="blank"
          >
            <Face className="fab" />
            {/* <FontAwesomeIcon icon={faFacebook} className="fab" /> */}
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="item-icon">
          <a href="https://www.facebook.com/profile.php?id=100080322847763&sk=about">
            <Face className="fab" />

            {/* <FontAwesomeIcon icon={faLinkedInIn} className="fab" /> */}
          </a>
        </div>
        <span className=" cursor-pointer hover:text-[#EF8A29] text-base">
          ♥️ Made by ♥️
          <Link
            className="link "
            href="https://www.facebook.com/profile.php?id=100080322847763&sk=about"
            target="blank"
          >
            {" "}
            <b>Salma</b>{" "}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
