"use client";
import React, { useCallback, useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";
import AnimatedProductButton from "./AnimatedProductButton";

const items = [
  {
    number: 1,
    text: "Dried & Frozen Seaweed",
  },
  {
    number: 2,
    text: "Instant Noodle & Food",
  },
  {
    number: 3,
    text: "Red Pepper Powder",
  },
  {
    number: 4,
    text: "Kimchi",
  },
  {
    number: 5,
    text: "Dried & Frozen Seafood",
  },
  {
    number: 6,
    text: "Grain & Fruit",
  },
  {
    number: 7,
    text: "Noodle",
  },
  {
    number: 8,
    text: "Tea & Drink",
  },
  {
    number: 9,
    text: "Pickled & Salted",
  },
  {
    number: 10,
    text: "Paste & Sauce, Sesame Oil",
  },
  {
    number: 11,
    text: "Confectionery",
  },
  {
    number: 12,
    text: "Fish Cake & Mandu",
  },
];

const ProductSection = () => {
  const [count, setCount] = useState(4);

  const toggleCount = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount === 4) return 12;
      return 4;
    });
  }, []);

  return (
    <Section id="product">
      <div className="flex flex-col items-center gap-[32px] tab:gap-[80px] pc:gap-[80px]">
        <SectionTitle
          title="Product"
          right={
            <AnimatedProductButton count={count} toggleCount={toggleCount} />
          }
        />
        <SectionContent>
          For more than 50 years, we have been committed to helping our partners
          find everything they need, from essential pantry items like Gochujang
          to the latest trendy Korean food products. We have 11 in-house food
          brands and a dedicated team to assist you in finding the products you
          need.
        </SectionContent>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] tab:gap-x-[80px] tab:gap-y-[80px] pc:grid-cols-4">
          {items.slice(0, count).map((item) => (
            <div
              key={item.number}
              className="w-full max-w-[140px] flex flex-col items-center tab:max-w-[300px]"
            >
              <Image
                src={`/images/product_${item.number}.png`}
                width={300}
                height={336}
                alt={item.text}
                className="!w-full"
              />
              <span className="text-center text-[14px] font-medium laeding-[120%] tarcking-[-0.28px] tab:text-[24px] tab:tracking-[-0.48px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <button
          className="w-full flex justify-center items-center gap-[8px] py-[12px] px-[24px] border border-primary cursor-pointer text-cneter text-[18px] font-bold text-primary tab:max-w-[182px]  transition-all duration-500 ease-out hover:bg-primary hover:text-white group pc:hidden"
          onClick={toggleCount}
        >
          View More{" "}
          {count === 4 ? (
            <>
              <Image
                src={"/images/plus_r.png"}
                width={24}
                height={24}
                alt="Plus Icon"
                className="block group-hover:hidden"
              />
              <Image
                src={"/images/plus_w.png"}
                width={24}
                height={24}
                alt="Plus Icon"
                className="hidden group-hover:block"
              />
            </>
          ) : (
            <>
              <Image
                src={"/images/arrowup_r.png"}
                width={24}
                height={24}
                alt="Arrowup Icon"
                className="block group-hover:hidden"
              />
              <Image
                src={"/images/arrowup_w.png"}
                width={24}
                height={24}
                alt="Arrowup Icon"
                className="hidden group-hover:block"
              />
            </>
          )}
        </button>
      </div>
    </Section>
  );
};

export default ProductSection;
