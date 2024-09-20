"use client";
import React from "react";
import Section from "./Section";

const SubscribeSection = () => {
  return (
    <Section className="bg-primary">
      <div className="flex flex-col items-center gap-[32px]">
        <p className="text-white text-center text-[32px] font-bold leading-[130%] tracking-[-0.64px]">
          Join our community for company news and product updates – subscribe
          now!
        </p>
        <div className="w-full flex flex-col items-center mob:flex-row">
          <input
            type="email"
            className="w-full h-[54px] border-4 border-white bg-primary text-center text-white text-[16px] font-semibold leading-[130%] tracking-[-0.32px] outline-none placeholder:text-[rgba(255, 255, 255, 0.80)] placeholder:font-medium mob:text-[18px] mob:text-start mob:px-[20px]"
            placeholder="Enter your email address"
          />
          <button
            className="w-full h-[54px] bg-white text-primary text-center text-[16px] font-bold tracking-[0.64px] mob:max-w-[200px] mob:text-[18px] mob:tracking-[0.72px]"
            onClick={() => {
              alert("email");
            }}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SubscribeSection;
