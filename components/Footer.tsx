import Image from "next/image";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="w-full max-w-screen-max mx-auto px-[20px] py-[40px] tab:px-[40px] tab:py-[60px] pc:px-[20px] pc:py-[60px]">
        <div className="w-full flex flex-col gap-[20px]">
          <Image
            src={"/images/samjin_logo.png"}
            width={300}
            height={36}
            alt="Samjin Logo"
            className="!w-[240px] tab:!w-[300px]"
          />
          <p className="flex flex-col text-[#6d6d6d] text-[14px] font-medium leading-[18.2px] tracking-[-2%] tab:text-[16px] tab:leading-[20.8px] tab:tracking:-[-2%] pc:text-[16px] pc:leading-[24px] pc:tracking-[-2%]">
            <span>562 SAMSEONG-RO, GANGNAM-GU, SEOUL, KOREA</span>
            <span>TEL. 02-3299-0900~9 FAX. 02-967-5110, 968-5506</span>
            <span>hello@wangfood.com</span>
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
