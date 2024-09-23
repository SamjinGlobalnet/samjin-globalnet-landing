import Image from "next/image";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="w-full max-w-screen-max mx-auto px-[20px] py-[60px] tab:px-[40px] pc:px-[20px] pc:py-[80px]">
        <div className="w-full flex flex-col gap-[20px]">
          <Image
            src={"/images/samjin_logo.png"}
            width={300}
            height={36}
            alt="Samjin Logo"
            className="!w-[240px] tab:!w-[300px]"
          />
          <p className="flex flex-col text-[#6d6d6d] text-[14px] font-medium leading-[130%] tracking-[-0.28px] tab:text-[16px] tab:tracking:-[-0.32px]">
            <span>562 SAMSEONG-RO, GANGNAM-GU, SEOUL, KOREA</span>
            <span>hello@wangfood.com</span>
            <span>TEL. 02-3299-0900~9 FAX. 02-967-5110, 968-5506</span>
          </p>
        </div>
      </footer>
      <div className="w-full max-w-screen-max mx-auto pc:px-[20px]">
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
