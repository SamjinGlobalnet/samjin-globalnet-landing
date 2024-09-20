import React from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import SectionContent from "./SectionContent";

const PartnershipsSection = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-[32px] mob:gap-[48px]">
        <SectionTitle title="Partnerships" />
        <SectionContent>
          Our extensive network includes numerous top leaders in the Korean food
          industry.
        </SectionContent>
        <div className="w-full border border-[#8D8D8D] py-[20px] grid grid-cols-2 gap-[4px] mob:py-[40px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <div key={item} className="flex items-center justify-center">
              <Image
                src={`/images/partnership_${item}.png`}
                width={160}
                height={160}
                alt={`Partnership_${item} Image`}
                className="!w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PartnershipsSection;
