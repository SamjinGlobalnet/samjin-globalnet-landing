import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const BrandSection = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-[32px] tab:gap-[40px] pc:gap-[48px]">
        <SectionTitle title="Our Brands" />
        <SectionContent>
          Our mission is to share the rich flavors of Korean cuisine worldwide,
          bringing authentic tastes that delight and connect people across the
          globe.
        </SectionContent>
        <div className="flex flex-col items-center gap-[12px] max:flex-row pc:py-[48px] pc:gap-0">
          <div className="flex items-center gap-[30px] tab:gap-[60px] pc:gap-0">
            <Image
              src={"/images/brand_1.png"}
              width={280}
              height={180}
              alt="brand 1"
              className="tab:!w-[220px] pc:!w-full"
            />
            <Image
              src={"/images/brand_2.png"}
              width={280}
              height={180}
              alt="brand 2"
              className="tab:!w-[220px] pc:!w-full"
            />
          </div>
          <div className="flex items-center pc:gap-0">
            <Image
              src={"/images/brand_3.png"}
              width={280}
              height={180}
              alt="brand 3"
              className="tab:!w-[220px] pc:!w-full"
            />
            <Image
              src={"/images/brand_4.png"}
              width={280}
              height={180}
              alt="brand 4"
              className="tab:!w-[220px] pc:!w-full"
            />
            <Image
              src={"/images/brand_5.png"}
              width={280}
              height={180}
              alt="brand 5"
              className="tab:!w-[220px] pc:!w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BrandSection;
