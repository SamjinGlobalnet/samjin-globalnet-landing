import React from "react";

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="w-full text-center text-[24px] font-medium leading-[130%] tracking-[-0.48px] mob:text-start mob:text-[28px] mob:tracking-[-0.56px]">
      {children}
    </p>
  );
};

export default SectionContent;
