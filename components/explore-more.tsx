"use client";

import Image from "next/image";
import { useState } from "react";

import cakeImage1 from "@/public/cake/cake-1.webp";
import cakeImage2 from "@/public/cake/cake-2.webp";
import cakeImage3 from "@/public/cake/cake-3.webp";
import cakeImage4 from "@/public/cake/cake-4.webp";
import cakeImage5 from "@/public/cake/cake-5.webp";
import cakeImage6 from "@/public/cake/cake-6.webp";

const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart"];
const categoriesData = {
  cake: [
    cakeImage1,
    cakeImage2,
    cakeImage3,
    cakeImage4,
    cakeImage5,
    cakeImage6,
  ],
};

const ExploreMore = () => {
  const [selectedCategory, setSetselectedCategory] =
    useState<keyof typeof categoriesData>("cake");

  return (
    <section>
      <h2 className="text-6xl text-center font-sansita-swashed mb-10">
        Explore More
      </h2>
      <div className="flex justify-center gap-10 border-b-1 pb-2 border-[#D9D9D9]">
        {categories.map((cateogry, i) => {
          return (
            <span
              key={i}
              className={`font-poppins font-semibold text-2xl text-ui-gray relative cursor-pointer ${
                cateogry.toLowerCase() === selectedCategory ? "selected" : ""
              }`}
              onClick={(e) => {
                const ele = e.target as HTMLElement;
                setSetselectedCategory(
                  ele.textContent?.toLowerCase() as keyof typeof categoriesData
                );
              }}
            >
              {cateogry}
            </span>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-5 ">
        {categoriesData[selectedCategory]?.map((img, i) => {
          return (
            <div
              key={i}
              className="place-self-center w-[360px] overflow-hidden [&>*]:hover:scale-120 [&>*]:transition-all [&>*]:duration-300 rounded-lg [&>img]:hover:blur-sm cursor-pointer"
            >
              <Image
                src={img}
                width={360}
                height={350}
                alt={selectedCategory}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreMore;
