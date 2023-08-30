import Clogos from "@/data/Clogos";
import Image from "next/image";
import logowhite from "@/assets/logwhite.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#DA5E42] flex justify-center w-full py-10 mt-10">
        <div className=" max-w-[1110px] w-full text-base m-auto grid justify-center items-center grid-cols-5 gap-4">
          {Clogos.map((item, index) => (
            <Image
              key={index}
              className=" flexm m-auto items-center justify-center"
              src={item.image}
              alt=""
            />
          ))}
        </div>
      </div>

      <div className="bg-primary flex justify-center w-full py-10  text-white">
        <ul className=" max-w-[1110px] w-full text-base m-auto grid justify-center items-start grid-cols-4 gap-5">
          <li>
            <ul className=" flex flex-col gap-4">
              <li>
                <Image src={logowhite}
                  alt="" />
              </li>
              <li>
                Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
                Sukasari, Bandung, Jawa Barat, Indonesia 40152
              </li>
              <li>
                <span>Office Hour</span>
                <span>Monday - Sunday</span>
                <span>10.00 - 18.00</span>
              </li>
            </ul>
          </li>
          <li className=" flex flex-col gap-4">
            <div>
              <h3 className="  font-medium text-2xl">Get in touch</h3>
              <span className=" flex relative w-[93px] h-[1px] mb-4 bg-white"></span>
            </div>
            <div>
              <span>Phone</span>
              <span>022-20277564</span>
            </div>
            <div>
              <span>Service Center</span>
              <span>0811-233-8899</span>
            </div>
            <div>
              <span>Customer Service</span>
              <span>0811-235-9988</span>
            </div>
          </li>
          <li>
            <div className=" flex flex-col gap-4">
              <h3 className="  font-medium text-2xl">Useful Link</h3>
              <span className=" flex relative w-[93px] h-[1px] mb-4 bg-white"></span>
            </div>

            <ul>
              <li>Warranty & Complaints</li>
              <li>Order & Shipping</li>
              <li>Tracking Order</li>
              <li>About Us</li>
              <li>Repair</li>
              <li>Terms</li>
              <li>FAQ</li>
            </ul>
          </li>
          <li>
            <div>
              <h3 className="  font-medium text-2xl">Campaign</h3>
              <span className=" flex relative w-[93px] h-[1px] mb-4 bg-white"></span>
            </div>

            <ul>
              <li>Mengenal Arti Cukup</li>
              <li>Tell Your Difference</li>
              <li>Waykambas</li>
              <li>Rebrand</li>
              <li>Gallery</li>
              <li>Singo</li>
              <li>Rakai</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
