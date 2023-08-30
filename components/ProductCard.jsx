import Image from "next/image";
import icons from "@/assets/icons";

const ProductCard = ({ image, name, rate, beforeprice, price }) => {
  return (
    <div className=" bg-white text-[12px] p-4 leading-none">
      <Image
        className=" mt-[-20%] w-[200px] h-[200px] object-cover mx-auto"
        src={image}
        alt={name}
      />
      <div className=" mt-2">
        <div>
          <h5 className=" text-base">{name}</h5>
          <span>{rate}</span>
        </div>
        <div className="mt-3">
          <h5 className=" line-through text-[10px] decoration-primary">{beforeprice}</h5>
          <span className=" text-base">{price}</span>
        </div>
      </div>
      <div className=" mt-2 items-center grid grid-cols-3 gap-2">
        <button className="  flex justify-center items-center border  h-[39px] border-primary text-primary">
          <icons.BsHeart size={16} />
        </button>
        <button className=" col-span-2 flex items-center gap-2 text-white  h-[39px] justify-center  px-5 bg-primary"> <span>Add to cart</span></button>
      </div>
    </div>
  );
};

export default ProductCard;
