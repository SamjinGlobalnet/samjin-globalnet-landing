import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const NetworkSection = () => {
  return (
    <Section className="bg-gray">
      <div className="flex flex-col items-center gap-[48px] tab:gap-[40px] pc:gap-[48px]">
        <SectionTitle title="Global Network" />
        <div className="w-full flex flex-col items-center gap-[12px]">
          <SectionContent>
            <div className="pc:w-full pc:max-w-[680px]">
              We have partners in over 65 countries, including the United
              States, Europe, Asia and Africa.
            </div>
          </SectionContent>
          <Image
            src={"/images/global.png"}
            width={898}
            height={426}
            alt="Global Image"
            className="!w-full tab:absolute pc:top-[-62px] pc:right-[0px] pc:!w-[898px]"
          />
          <div className="h-0 tab:h-[200px] pc:h-[80px]"></div>
          <div className="w-full flex gap-[10px] z-10 tab:gap-[12px] pc:gap-[60px]">
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
                className="w-full h-[130px] flex flex-col gap-[4px] justify-center items-center bg-white tab:h-[200px] tab:gap-[12px]"
                style={{
                  boxShadow: "0px 0px 5.3px 0px rgba(0, 0, 0, 0.23)",
                }}
              >
                <div className="text-primary text-center text-[24px] font-extrabold leading-[100%] tracking-[-0.48px] tab:text-[48px] tab:tracking-[-0.96px]">
                  {item.title}
                </div>
                <div className="text-black text-center text-[16px] font-medium leading-[130%] tracking-[-0.32px] tab:text-[24px] tab:tracking-[-0.48px]">
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
