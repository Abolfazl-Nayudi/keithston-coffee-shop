import ProductCard from "./product-card";
import topProductImg1 from "@/public/top-product-img-1.webp";
import topProductImg2 from "@/public/top-product-img-2.webp";
import topProductImg3 from "@/public/top-product-img-3.webp";
import topProductImg4 from "@/public/top-product-img-4.webp";
import topProductImg5 from "@/public/top-product-img-5.webp";
import topProductImg6 from "@/public/top-product-img-6.webp";
const cards = [
  {
    image: topProductImg1,
    price: 38,
    productName: "Honeycomb Puff Pastry",
  },
  {
    image: topProductImg2,
    price: 42,
    productName: "Fruit Danish Pastry",
  },
  {
    image: topProductImg3,
    price: 40,
    productName: "Whole Grain Baguette",
  },
  {
    image: topProductImg4,
    price: 35,
    productName: "Rustic Sourdough Bread",
  },
  {
    image: topProductImg5,
    price: 45,
    productName: "Sliced Cheese Borek",
  },
  {
    image: topProductImg6,
    price: 37,
    productName: "Kaiser Roll",
  },
];

const TopProducts = () => {
  return (
    <section className="mt-20">
      <h2 className="text-6xl text-center font-sansita-swashed mb-10">
        Top Products
      </h2>
      <section className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">
        {cards.map((item, i) => {
          return <ProductCard {...item} key={i} />;
        })}
      </section>
    </section>
  );
};

export default TopProducts;
