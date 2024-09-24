"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

interface CountUpProps {
  index?: number;
  end: number;
  start?: number;
  duration?: number;
  triggerOnce?: boolean;
}

const CountUp: React.FC<CountUpProps> = ({
  index,
  end,
  start = 0,
  duration = 2000,
  triggerOnce = true,
}) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const easeOutQuad = (t: number): number => t * (2 - t);

  const animateCount = useCallback(() => {
    if (triggerOnce && hasAnimated.current) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        hasAnimated.current = true;
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration, triggerOnce]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!triggerOnce || !hasAnimated.current) {
            animateCount();
          }
        } else {
          setIsVisible(false);
          if (!triggerOnce) {
            setCount(start);
            hasAnimated.current = false;
          }
        }
      },
      { threshold: 0.8 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [animateCount, start, triggerOnce]);

  return (
    <div
      ref={countRef}
      className="text-primary text-center text-[24px] font-extrabold leading-[100%] tracking-[-0.48px] tab:text-[48px] tab:tracking-[-0.96px]"
    >
      {isVisible ? count.toLocaleString() : start.toLocaleString()}{" "}
      {index === 1 ? "+" : ""}
    </div>
  );
};

export default CountUp;
