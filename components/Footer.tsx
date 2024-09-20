import Image from "next/image";
import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <footer className="w-full px-[20px] py-[60px] mob:px-[40px]">
        <div className="flex flex-col gap-[20px]">
          <Image
            src={"/images/samjin_logo.png"}
            width={100}
            height={30}
            alt="Samjin Logo"
            className="!w-[240px] mob:!w-[300px]"
          />
          <p className="flex flex-col text-[#6d6d6d] text-[14px] font-medium leading-[130%] tracking-[-0.28px] mob:text-[16px] mob:tracking:-[-0.32px]">
            <span>562 SAMSEONG-RO, GANGNAM-GU, SEOUL, KOREA</span>
            <span>hello@wangfood.com</span>
            <span>TEL. 02-3299-0900~9 FAX. 02-967-5110, 968-5506</span>
          </p>
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
