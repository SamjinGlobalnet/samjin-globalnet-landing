import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const BrandSection = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-[32px] mob:gap-[40px]">
        <SectionTitle title="Our Brands" />
        <SectionContent>
          Our mission is to share the rich flavors of Korean cuisine worldwide,
          bringing authentic tastes that delight and connect people across the
          globe.
        </SectionContent>
        <div className="flex flex-col items-center gap-[12px]">
          <div className="flex items-center gap-[30px] mob:gap-[60px]">
            <Image
              src={"/images/brand_1.png"}
              width={100}
              height={80}
              alt="brand 1"
              className="mob:!w-[220px]"
            />
            <Image
              src={"/images/brand_2.png"}
              width={100}
              height={80}
              alt="brand 2"
              className="mob:!w-[220px]"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={"/images/brand_3.png"}
              width={100}
              height={80}
              alt="brand 3"
              className="mob:!w-[220px]"
            />
            <Image
              src={"/images/brand_4.png"}
              width={100}
              height={80}
              alt="brand 4"
              className="mob:!w-[220px]"
            />
            <Image
              src={"/images/brand_5.png"}
              width={100}
              height={80}
              alt="brand 5"
              className="mob:!w-[220px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BrandSection;
