import Image from "next/image";
import logo from "../assets/logo.svg";
import icons from "../assets/icons"


const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between  max-w-[1110px] mx-auto pb-5 pt-2">
        <Image
          src={logo}
          width
          height={20}
          quality={100}
          blurDataURL="data:../assets/logo.svg"
          placeholder="blur"
          alt="logo"
        />
        <ul className=" flex gap-5">
          <li>Watches</li>
          <li>Eyewear</li>
          <li>Accessories</li>
          <li>News</li>
        </ul>
        <ul className=" flex items-center  gap-5">
            <li><icons.CiSearch size={24} /></li>
            <li className="flex items-center gap-1"><icons.GoPerson size={20} /> <span> Log In</span></li>
            <li className=" rounded-full bg-secondary w-[30px] h-[30px] flex items-center justify-center "><icons.SlBag size={20} /></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
