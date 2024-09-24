"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById("about");
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.8 } // 10% of the target is visible
    );

    observer.observe(targetElement);

    return () => observer.disconnect();
  }, [isVisible]);

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
            className="w-[24px] h-[24px] cursor-pointer flex pc:hidden justify-center items-center tab:w-[40px] tab:h-[40px]"
            onClick={openModal}
          >
            <Image
              src={"/images/contact_r.png"}
              width={40}
              height={40}
              alt="Contact Icon"
              className="!w-full !h-full"
            />
          </div>
          <button
            className={`group w-[180px] h-[48px] justify-center items-center gap-[8px] bg-primary ${
              isVisible ? "hidden" : "pc:flex"
            }`}
            onClick={openModal}
          >
            <Image
              src={"/images/contact_w.png"}
              width={24}
              height={24}
              alt="Contact Icon"
            />
            <span className="text-white text-[18px] font-bold leading-[23.4px] tracking-[4%]">
              Contact Us
            </span>
            <Image
              src={"/images/arrowright_w.png"}
              width={24}
              height={24}
              alt="Contact Icon"
              className="hidden group-hover:block"
            />
          </button>
        </div>
      </header>
      {open && <ContactModal onClose={closeModal} />}
    </>
  );
};

export default Header;
