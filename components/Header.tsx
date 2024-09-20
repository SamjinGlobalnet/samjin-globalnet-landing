import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[60px] px-[20px] flex justify-between items-center bg-white border-b border-b-[#ccc]">
      <Image
        src={"/images/samjin_logo.png"}
        width={100}
        height={30}
        alt="Samjin Logo"
        className="!w-[240px]"
      />
      <div className="w-[24px] h-[24px] mob:w-[48px] mob:h-[48px] cursor-pointer flex justify-center items-center">
        <Image
          src={"/images/contact_r.png"}
          width={18}
          height={18}
          alt="Contact Icon"
          className="mob:!w-[40px] mob:!h-[40px]"
        />
      </div>
    </header>
  );
};

export default Header;
