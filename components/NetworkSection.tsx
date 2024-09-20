import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const NetworkSection = () => {
  return (
    <Section className="bg-gray">
      <div className="flex flex-col items-center gap-[48px] mob:gap-[40px]">
        <SectionTitle title="Global Network" />
        <div className="flex flex-col items-center gap-[12px]">
          <SectionContent>
            We have partners in over 65 countries, including the United States,
            Europe, Asia and Africa.
          </SectionContent>
          <Image
            src={"/images/global.png"}
            width={100}
            height={100}
            alt="Global Image"
            className="!w-full mob:absolute"
          />
          <div className="h-0 mob:h-[200px]"></div>
          <div className="w-full flex gap-[10px] z-10 mob:gap-[12px]">
            {[
              {
                title: "54",
                content: "Years In Business",
              },
              {
                title: "10,000+",
                content: "Products",
              },
              {
                title: "65",
                content: "Countries",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full h-[130px] flex flex-col gap-[4px] justify-center items-center bg-white mob:h-[200px] mob:gap-[12px]"
                style={{
                  boxShadow: "0px 0px 5.3px 0px rgba(0, 0, 0, 0.23)",
                }}
              >
                <div className="text-primary text-center text-[24px] font-extrabold leading-[100%] tracking-[-0.48px] mob:text-[48px] mob:tracking-[-0.96px]">
                  {item.title}
                </div>
                <div className="text-black text-center text-[16px] font-medium leading-[130%] tracking-[-0.32px] mob:text-[24px] mob:tracking-[-0.48px]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NetworkSection;
