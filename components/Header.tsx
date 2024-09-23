"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full h-[60px] px-[20px] bg-white border-b border-b-[#ccc] tab:h-[100px] z-[100]">
        <div className="w-full h-full max-w-screen-max mx-auto flex justify-between items-center">
          <Image
            src={"/images/samjin_logo.png"}
            width={456}
            height={54}
            alt="Samjin Logo"
            className="!w-[240px] tab:!w-[360px] pc:!w-[456px]"
          />
          <div
            className="w-[24px] h-[24px] cursor-pointer flex justify-center items-center tab:w-[48px] tab:h-[48px]"
            onClick={openModal}
          >
            <Image
              src={"/images/contact_r.png"}
              width={40}
              height={40}
              alt="Contact Icon"
              className="tab:!w-[40px] tab:!h-[40px]"
            />
          </div>
        </div>
      </header>
      {open && <ContactModal onClose={closeModal} />}
    </>
  );
};

export default Header;
