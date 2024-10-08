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
        <div className="w-full flex flex-col items-center gap-[12px] pc:py-[48px] pc:gap-0 pc:flex-row">
          <div className="w-full flex justify-center items-center gap-[30px] tab:gap-[60px] pc:gap-0 pc:w-2/5">
            <div className="w-full max-w-[100px] tab:max-w-[182px] pc:max-w-[288px]">
              <Image
                src={"/images/brand_1.png"}
                width={288}
                height={180}
                alt="brand 1"
                className="!w-full"
              />
            </div>
            <div className="w-full max-w-[100px] tab:max-w-[182px] pc:max-w-[288px]">
              <Image
                src={"/images/brand_2.png"}
                width={288}
                height={180}
                alt="brand 2"
                className="!w-full"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center pc:gap-0 pc:w-3/5">
            <div className="w-full max-w-[100px] tab:max-w-[220px] pc:max-w-[288px]">
              <Image
                src={"/images/brand_3.png"}
                width={288}
                height={180}
                alt="brand 3"
                className="!w-full"
              />
            </div>
            <div className="w-full max-w-[100px] tab:max-w-[220px] pc:max-w-[288px]">
              <Image
                src={"/images/brand_4.png"}
                width={288}
                height={180}
                alt="brand 4"
                className="!w-full"
              />
            </div>
            <div className="w-full max-w-[100px] tab:max-w-[220px] pc:max-w-[288px]">
              <Image
                src={"/images/brand_5.png"}
                width={288}
                height={180}
                alt="brand 5"
                className="!w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BrandSection;
