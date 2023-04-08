import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Logo from "../images/logofinal.png";
import Image from "next/image";


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-[#EF8A29] py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="transition duration-500 cursor-pointer ease font-bold text-4xl text-[#346F65] hover:text-[#EF8A29]">
              <Image
                src={Logo}
                alt=""
                width="60"
                height="20"
                className="inline-block"
              />
              Af<span className="text-[#EF8A29]">r</span>
              ican Y<span className="text-[#EF8A29]">o</span>uth C
              <span className="text-[#EF8A29]">l</span>ub
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle transition duration-500 text-[#346F65] hover:text-[#EF8A29] ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
