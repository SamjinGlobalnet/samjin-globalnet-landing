import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex flex-col items-center gap-[24px] mob:items-start mob:gap-[28px]">
      <h3 className="text-[32px] font-bold leading-[130%] tracking-[-0.64px] mob:text-[36px] mob:tracking-[-0.72px]">
        {title}
      </h3>
      <div className="w-[32px] h-[2px] bg-primary mob:w-[36px]"></div>
    </div>
  );
};

export default SectionTitle;
