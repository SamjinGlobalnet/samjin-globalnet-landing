import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const ProductSection = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-[32px] mob:gap-[80px]">
        <SectionTitle title="Product" />
        <SectionContent>
          For more than 50 years, we have been committed to helping our partners
          find everything they need, from essential pantry items like Gochujang
          to the latest trendy Korean food products. We have 11 in-house food
          brands and a dedicated team to assist you in finding the products you
          need.
        </SectionContent>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] mob:gap-x-[80px] mob:gap-y-[80px]">
          {[
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
          ].map((item) => (
            <div
              key={item.number}
              className="w-full max-w-[140px] flex flex-col items-center mob:max-w-[300px]"
            >
              <Image
                src={`/images/product_${item.number}.png`}
                width={140}
                height={130}
                alt={item.text}
                className="!w-full"
              />
              <span className="text-center text-[14px] font-medium laeding-[120%] tarcking-[-0.28px] mob:text-[24px] mob:tracking-[-0.48px]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <button className="w-full flex justify-center items-center gap-[8px] py-[12px] px-[24px] border border-primary cursor-pointer text-cneter text-[18px] font-bold text-primary mob:max-w-[182px]">
          View More{" "}
          <Image
            src={"/images/plus_r.png"}
            width={24}
            height={24}
            alt="Plus Icon"
          />
        </button>
      </div>
    </Section>
  );
};

export default ProductSection;
