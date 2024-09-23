import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[500px] bg-[url('/images/banner_mob.jpg')] bg-bottom bg-cover bg-no-repeat mb-[60px] tab:h-[740px] tab:bg-[url('/images/banner_tab.jpg')] pc:bg-[url('/images/banner_pc.jpg')] pc:h-[630px] pc:mb-0">
      <div className="w-full max-w-screen-max mx-auto pc:px-[20px]">
        <h1 className="flex flex-col items-center text-center text-[36px] font-extrabold leading-[105%] tracking-[-0.72px] pt-[77px] tab:text-[48px] tab:tracking-[-0.96px] tab:pt-[118px] pc:text-left pc:items-start pc:text-[72px] pc:leading-[75.6px] pc:tracking-[-2%] pc:pt-[143px]">
          <span>Sell Korean food with</span>
          <span className="text-primary">Samjin Globalnet</span>
        </h1>
        <p className="flex flex-col items-center text-center text-[18px] font-medium leading-[130%] tracking-[-0.36px] mt-[23px] tab:text-[24px] tab:tracking-[-0.48px] tab:mt-[26px] pc:text-[40px] pc:leading-[44px] pc:tracking-[-2%] pc:text-left pc:items-start pc:mt-[43px]">
          <span>Access thousands of high-quality</span>
          <span>food products from Korea</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
