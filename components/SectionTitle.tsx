import React from "react";

const SectionTitle = ({
  title,
  right,
}: {
  title: string;
  right?: React.ReactNode;
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col items-center gap-[24px] tab:items-start tab:gap-[28px]">
        <h3 className="text-[32px] font-bold leading-[130%] tracking-[-0.64px] tab:text-[36px] tab:tracking-[-0.72px] pc:text-[48px] pc:leading-[62.4px] pc:tracking-[-2%]">
          {title}
        </h3>
        <div className="w-[32px] h-[2px] bg-primary tab:w-[36px] pc:w-[40px]"></div>
      </div>
      <div className="hidden pc:flex">{right}</div>
    </div>
  );
};

export default SectionTitle;
