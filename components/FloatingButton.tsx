"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ContactModal from "./ContactModal";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // about 섹션의 요소를 가져옴
      const targetElement = document.getElementById("about");

      if (targetElement) {
        // 요소의 위치 정보를 가져옴 (top은 요소의 상단 위치를 의미)
        const elementTop =
          targetElement.getBoundingClientRect().top + window.scrollY;

        // 현재 스크롤 위치를 가져옴
        const scrollY = window.scrollY;

        // 스크롤 위치가 요소의 위치보다 크면 컴포넌트를 숨기고, 그렇지 않으면 표시
        if (scrollY > elementTop - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const targetElement = document.getElementById("about");
  //   if (!targetElement) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log({
  //         targetElement: targetElement.scrollHeight,
  //         entry: entry.boundingClientRect.top,
  //       });
  //       if (!isVisible) {
  //         setIsVisible(entry.isIntersecting);
  //       }
  //     },
  //     { threshold: 0.8 }
  //   );

  //   observer.observe(targetElement);

  //   return () => observer.disconnect();
  // }, [isVisible]);

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
