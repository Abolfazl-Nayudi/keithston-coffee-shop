import Image, { StaticImageData } from "next/image";
import Button from "./button";

type CardDataProps = {
  image: StaticImageData;
  price: number;
  productName: string;
};

const ProductCard = ({ image, price, productName }: CardDataProps) => {
  return (
    <div className="bg-[url(../public/card-background.webp)] bg-no-repeat bg-cover w-[360] h-[441px] rounded-md flex flex-col items-center p-7 place-self-center">
      <Image src={image} alt="card" />
      <div className="w-full mt-5">
        <span className="text-2xl text-ui-primary font-semibold">{price}$</span>
      </div>
      <div className="w-full flex items-center justify-between mt-7">
        <span className="text-2xl text-ui-primary font-semibold inline-block w-60">
          {productName}
        </span>
        <Button text="Add" className="px-4" />
      </div>
    </div>
  );
};

export default ProductCard;
