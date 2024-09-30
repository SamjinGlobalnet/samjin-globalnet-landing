import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import SectionContent from "./SectionContent";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-[32px] tab:gap-[40px] pc:gap-[48px]">
        <SectionTitle title="About us" />
        <SectionContent>
          Founded in 1970,{" "}
          <span className="font-bold text-primary">Samjin Globalnet</span> has
          been exporting Korean food products worldwide, ensuring high-quality
          standards and expanding its presence in America, Europe, and Asia.
        </SectionContent>
        <div className="py-[20px] grid grid-cols-2 gap-[24px] tab:py-[48px] tab:grid-cols-3 tab:gap-[12px] pc:py-[48px] pc:grid-cols-6 pc:gap-[24px]">
          {[
            {
              number: 1,
              text: "Korean Food Export",
            },
            {
              number: 2,
              text: "Export Logistics",
            },
            {
              number: 3,
              text: "Private Labels",
            },
            {
              number: 4,
              text: "Sourcing",
            },
            {
              number: 5,
              text: "Consultation",
            },
            {
              number: 6,
              text: "Production",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="wfull max-w-[140px] p-[20px] flex flex-col items-center gap-[24px] tab:max-w-[220px]"
            >
              <Image
                src={`/images/about_${item.number}.png`}
                width={96}
                height={96}
                alt={item.text}
                className="tab:!w-[96px] tab:!h-[96px]"
              />
              <div className="text-center text-[18px] leading-[130%] tracking-[-0.36px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
