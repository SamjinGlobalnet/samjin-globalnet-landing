import React from "react";

const Section = ({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`w-full py-[60px] px-[20px] tab:py-[80px] tab:px-[40px] pc:py-[100px] pc:px-[20px] ${className}`}
    >
      <div className="relative w-full max-w-screen-max mx-auto">{children}</div>
    </section>
  );
};

export default Section;
