import React from "react";

const SectionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full text-center text-[24px] font-medium leading-[130%] tracking-[-0.48px] tab:text-start tab:text-[28px] tab:tracking-[-0.56px] pc:text-[32px] pc:leading-[41.6px] pc:tracking-[-2%]">
      {children}
    </div>
  );
};

export default SectionContent;
