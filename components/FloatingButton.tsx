"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const targetElement = document.getElementById("about");
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.8 }
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
      <button
        ref={buttonRef}
        className={`fixed z-[100] bottom-[40px] right-[5%] w-[60px] h-[60px] rounded-full bg-primary shadow-lg justify-center items-center hidden pc:flex transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        onClick={openModal}
      >
        <Image
          src={"/images/contact_w.png"}
          width={30}
          height={30}
          alt="Contact Icon"
        />
      </button>
      {open && <ContactModal onClose={closeModal} />}
    </>
  );
};

export default FloatingButton;
