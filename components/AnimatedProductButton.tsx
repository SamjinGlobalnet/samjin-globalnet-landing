import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedProductButtonProps {
  toggleCount?: () => void;
}

const AnimatedProductButton: React.FC<AnimatedProductButtonProps> = ({
  toggleCount,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const targetElement = document.getElementById("product");
    if (!targetElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(targetElement);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <button
      ref={buttonRef}
      className={`w-full flex justify-center items-center gap-[8px] py-[12px] px-[24px] border border-primary cursor-pointer text-cneter text-[18px] font-bold text-primary tab:max-w-[182px] transition-all duration-500 ease-out
        ${isVisible ? "translate-x-0" : "translate-x-[calc(1000%)]"}`}
      onClick={toggleCount}
    >
      View More{" "}
      <Image
        src={"/images/plus_r.png"}
        width={24}
        height={24}
        alt="Plus Icon"
      />
    </button>
  );
};

export default AnimatedProductButton;
