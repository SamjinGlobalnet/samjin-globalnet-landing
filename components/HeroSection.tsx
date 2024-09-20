import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-[500px] bg-[url('/images/banner_mob.jpg')]  bg-center bg-cover bg-no-repeat mb-[60px] mob:h-[740px] mob:bg-[url('/images/banner_tab.jpg')]">
      {/* Container */}
      <div>
        <h1 className="flex flex-col items-center text-center text-[36px] font-extrabold leading-[105%] tracking-[-0.72px] pt-[77px] mob:text-[48px] mob:tracking-[-0.96px] mob:pt-[118px]">
          <span>Sell Korean food with</span>
          <span className="text-primary">Samjin Globalnet</span>
        </h1>
        <p className="flex flex-col items-center text-center text-[18px] font-medium leading-[130%] tracking-[-0.36px] mt-[23px] mob:text-[24px] mob:tracking-[-0.48px] mob:mt-[26px]">
          <span>Access thousands of high-quality</span>
          <span>food products from Korea</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
