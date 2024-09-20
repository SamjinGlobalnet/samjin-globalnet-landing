import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`w-full py-[60px] px-[20px] mob:py-[80px] mob:px-[40px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
