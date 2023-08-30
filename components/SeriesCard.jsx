import Image from "next/image";

const SeriesCard = ({ image, name, price }) => {
  return (
    <div className=" flex  gap-2 items-center">
      <div className=" bg-secondary w-[100px] h-[100px] flex items-center justify-center  ">
        <Image
          className=" h-[80px] w-auto"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <span>{name}</span>
        <h6>{price}</h6>
      </div>
    </div>
  );
};

export default SeriesCard;
