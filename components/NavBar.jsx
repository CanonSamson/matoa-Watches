"use client";

import Image from "next/image";
import logo from "../assets/logo.svg";
import icons from "../assets/icons";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="flex relative items-center justify-between  max-w-[1110px]  mx-auto pb-5 pt-2 px-2">
        <Image
          src={logo}
          width
          height={20}
          quality={100}
          blurDataURL="data:../assets/logo.svg"
          placeholder="blur"
          alt="logo"
        />
        <button
          onClick={() => setToggle(false)}
          className={` ${
            toggle ? "flex" : "hidden"
          } fixed bg-black/10 z-[9] top-0 right-0 h-screen w-full`}
        ></button>
        <ul className="  hidden md:flex p-4  flex-row gap-5">
          <li>Watches</li>
          <li>Eyewear</li>
          <li>Accessories</li>
          <li>News</li>
        </ul>
        <ul
          className={` ${
            toggle ? "flex " : "hidden"
          } fixed right-0 md:hidden bg-white p-4 h-screen w-[200px]  z-[10] md:h-auto top-0  flex-col  gap-5`}
        >
          <icons.FiX className=" mb-10" size={24} />
          <li>Watches</li>
          <li>Eyewear</li>
          <li>Accessories</li>
          <li>News</li>
        </ul>
        <ul className="  items-center hidden md:flex  gap-5">
          <li>
            <icons.CiSearch size={24} />
          </li>
          <li className="flex items-center gap-1">
            <icons.GoPerson size={20} /> <span> Log In</span>
          </li>
          <li className=" rounded-full bg-secondary w-[30px] h-[30px] flex items-center justify-center ">
            <icons.SlBag size={20} />
          </li>
        </ul>
        <div className="  items-center md:hidden flex  gap-2">
          <button className=" rounded-full bg-secondary w-[30px] h-[30px] flex items-center justify-center ">
            <icons.SlBag size={20} />
          </button>
          <button onClick={() => setToggle(true)} className=" rounded-full active:bg-secondary w-[30px] h-[30px] flex items-center justify-center ">
            <icons.FiMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
