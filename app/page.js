import NavBar from "@/components/NavBar";
import image1 from "@/assets/image1.png"
import cicil from "@/assets/cicil.svg"
import Image from "next/image";
import Link from "next/link";
import icons from "@/assets/icons"
import vector from "@/assets/vector.svg"
import vector2 from "@/assets/vector2.svg"
import vector3 from "@/assets/vector3.svg"
import vector4 from "@/assets/vector4.svg"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import instagram1 from "@/assets/instagram1.png"
import instagram2 from "@/assets/instagram2.png"
import instagram3 from "@/assets/instagram3.png"
import instagram4 from "@/assets/instagram4.png"
import instagram5 from "@/assets/instagram5.png"

//arrow
import left from "@/assets/left.svg"
import right from "@/assets/right.svg"
import MaskGroup7 from "@/assets/MaskGroup7.png"
import ProductCard from "@/components/ProductCard";
import MaskGroup5 from "@/assets/MaskGroup5.png"
import MonthlyDeals from "@/data/MonthlyDeals";
import Series from "@/data/Series";
import SeriesCard from "@/components/SeriesCard";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main className=" bg-[#F7F6F4] min-h-screen relative leading-none" >
      <NavBar />
      <Image
        className=" z-[2] top-0 absolute right-0"
        src={vector}
        placeholder="blur"
        blurDataURL="data:@/assets/vector.svg"
        alt=" image"
      />
      <header className=" relative my-10 p-10 bg-secondary max-w-[1110px] mx-auto flex items-start ">

        <Image
          src={image1}
          placeholder="blur"
          blurDataURL="data:@/assets/image1.png"
          alt="hero images"
          className="mb-[-200px] w-[50%] relative"
        />
        <div className=" flex flex-col">
          <h1 className=" font-medium text-[60px] ">WAY KAMBAS <br /> MINI EBONY</h1>
          <span className=" flex relative w-[93px] h-[1px] mb-4 bg-black"></span>
          <p className="text-base pb-4 w-[75%]">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino &apos;s skin which is designed with an overlap effect on its strap to represent Rhino&apos;s skin.</p>
          <Link href=""><buttn className=" border-b border-black relative ">Discover</buttn></Link>
          <div className="flex items-center gap-2 mt-4">
            <button className=" flex items-center gap-2 text-white h-[45px] px-5 bg-primary"> <icons.SlBag size={24} /><span>Add to cart</span></button>
            <button className=" flex items-center gap-2 text-white h-[45px]  border px-5 border-primary">
              <Image
                src={cicil}
                placeholder="blur"
                blurDataURL="data:@/assets/cicil.svg"
                alt="cicil image"
              />
            </button>
          </div>
        </div>
        <div className=" absolute flex items-center gap-2 bottom-[-25px] right-5">
          <button className=" flex justify-center items-center gap-2 border h-[50px] w-[50px] text-primary  border-primary" ><icons.MdOutlineArrowBackIosNew size={30} /></button>
          <button className=" flex justify-center items-center gap-2 text-white h-[50px] w-[50px] bg-primary"><icons.IoIosArrowForward size={30} /></button>
        </div>
      </header>

      <section className="max-w-[1110px] text-base mx-auto grid grid-cols-2 gap-5 mt-[120px]">
        <div className=" flex flex-col p-5 bg-white ">
          <h2>Luxurious Eyewear</h2>
          <p className=" text-[12px]">See the beauty of exotic world with the luxurious glasses</p>
          <div className=" relative flex gap-2 mt-4 justify-between">
            <Link href=""><buttn className=" border-b border-black relative ">Discover Now</buttn></Link>
            <Image
              src={image2}
              placeholder="blur"
              blurDataURL="data:@/assets/image2.svg"
              alt="image2 image"
            />
          </div>
        </div>
        <div className=" flex flex-col p-5  bg-white ">
          <h2>Comfortable Watches</h2>
          <p className=" text-[12px]">Feels the balancing function and beauty in our wooden watches</p>
          <div className=" relative flex gap-2 mt-4 justify-between">
            <Link href=""><buttn className=" border-b border-black relative ">Discover Now</buttn></Link>
            <Image
              src={image3}
              placeholder="blur"
              blurDataURL="data:@/assets/image3.svg"
              alt="image3 image"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1110px] text-base mx-auto  mt-[70px]">
        <div>
          <h3 className="  font-medium text-2xl">Monthly Deals</h3>
          <span className=" flex relative w-[93px] h-[1px] mb-4 bg-black"></span>
        </div>

        <div className=" grid grid-cols-4 py-[100px] gap-4">
          {
            MonthlyDeals.map((item, index) => (
              <ProductCard key={index} image={item.image}
                name={item.name} rate={item.rate}
                beforeprice={item.beforeprice}
                price={item.price} />
            ))
          }
        </div>
      </section>

      <section className="relative text-base">
        <div className="max-w-[1110px] pr-[10%]  mx-auto ">
          <div>
            <h3 className="  font-medium text-2xl">Recent News</h3>
            <span className=" flex relative w-[93px] h-[1px] mb-4 bg-black"></span>
          </div>

          <div className=" py-[100px] text-base gap-4 flex  items-center">
            <div >
              <spa>Where To Travel</spa>
              <h3 className="text-2xl">Matoa Where To Travel? Yogyakarta</h3>
              <button className=" px-5 mt-4 h-[40px] text-primary border border-primary flex justify-center items-center">Discover</button>
            </div>
            <Image
              className=" relative z-[2] h-[464px]"
              src={MaskGroup5}
              placeholder="blur"
              blurDataURL="data:"
              alt=""
            />
          </div>
        </div>
        <div className=" z-[1] flex absolute bg-secondary  w-[40%] right-0 h-[458px] top-0"></div>
        <Image
          className=" z-[1] flex absolute  w-[40%] right-0 h-[458px] top-0"
          src={vector2}
          placeholder="blur"
          blurDataURL="data:"
          alt=""
        />
        <Image
          className=" z-[1] flex absolute  w-[40%] right-0 h-[458px] top-[200px]"
          src={vector3}
          placeholder="blur"
          blurDataURL="data:"
          alt=""
        />
      </section>


      <section className="max-w-[1110px] text-base mx-auto  pb-[70px]">
        <div className=" grid grid-cols-3 gap-2">
          <div>
            <h5 className="  font-medium text-xl">Monthly Deals</h5>
            <span className=" flex relative w-[50px] h-[1px] mb-4 bg-black"></span>
          </div>
          <div>
            <h5 className="  font-medium text-xl">Ebony Series</h5>
            <span className=" flex relative w-[50px] h-[1px] mb-4 bg-black"></span>
          </div>
          <div>
            <h5 className="  font-medium text-xl">Featured</h5>
            <span className=" flex relative w-[50px] h-[1px] mb-4 bg-black"></span>
          </div>
          {
            Series.map((item, index) => (
              <SeriesCard key={index}
                image={item.image}
                name={item.name}
                price={item.price} />
            ))
          }
        </div>
        <div className=" flex items-center mt-[40px] justify-center gap-4">
          <span className=" w-full flex relative my-auto h-[1px] mb-4 bg-[#999999]/50"></span>
          <button className=" w-[250px] px-5 mt-4 h-[40px] text-primary border border-primary flex justify-center items-center">See More</button>
          <span className=" w-full flex relative my-auto h-[1px] mb-4 bg-[#999999]/50"></span>

        </div>
      </section>


      <section className=" relative text-base   pb-[70px]">

        <div className="max-w-[1110px] mt-[70px] flex mx-auto items-start gap-10">
          <Image
            className="relative z-[2]  mt-[70px] h-[321px] w-[515px]"
            src={MaskGroup7}
            placeholder="blur"
            blurDataURL="data:"
          />
          <div className=" flex flex-col gap-5 text-base">
            <div>
              <h5 className="  font-medium text-2xl">Testimonials</h5>
              <span className=" flex relative w-[70px] h-[1px] mb-4 bg-black"></span>
            </div>
            <p>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>
            <div>
              <h6 className=" font-medium  text-xl">Gita Savitri</h6>
              <p>Content Creator/Influencer</p>
            </div>
          </div>
        </div>
        <div className=" z-[1] flex absolute bg-secondary  w-[515px] left-0 h-[300px] top-0"></div>
        <Image
          className=" z-[1] flex absolute left-0  top-[-70px]"
          src={vector4}
          placeholder="blur"
          blurDataURL="data:"
          alt=''
        />
        <div className="max-w-[1110px] mt-[20px] flex mx-auto items-start gap-10">
          <div className="flex items-center gap-4">
            <Image
              src={left}
              placeholder="blur"
              blurDataURL="data:"
              alt=""
            />
            <Image
              src={right}
              placeholder="blur"
              blurDataURL="data:"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1110px] text-base mx-auto  ">
        <div>
          <h3 className="  font-medium text-2xl">Instagram</h3>
          <span className=" flex relative w-[93px] h-[1px] mb-4 bg-black"></span>
        </div>

        <div className=" grid grid-cols-5 py-[10px]">
          <Image
            src={instagram1}
            placeholder="blur"
            blurDataURL="data:"
            alt=""
          />
          <Image
            src={instagram2}
            placeholder="blur"
            blurDataURL="data:"
            alt=""
          />
          <Image
            src={instagram3}
            placeholder="blur"
            blurDataURL="data:"
            alt=""
          />
          <Image
            src={instagram4}
            placeholder="blur"
            blurDataURL="data:"
            alt=""
          />
          <Image
            src={instagram5}
            placeholder="blur"
            blurDataURL="data:"
            alt=""
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
