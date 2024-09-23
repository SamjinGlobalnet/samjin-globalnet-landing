import Image from "next/image";
import React from "react";

const Input = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-[14px] font-medium leading-[18.2px] tracking-[-2%] text-text">
        {label}
      </label>
      <input
        type="text"
        className="w-full h-[44px] bg-white border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] shadow-sm"
      />
    </div>
  );
};

const Textarea = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-[14px] font-medium leading-[18.2px] tracking-[-2%] text-text">
        {label}
      </label>
      <textarea className="w-full h-[120px] bg-white border border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px] resize-none shadow-sm" />
    </div>
  );
};

const ContactModal = ({ onClose }: { onClose?: () => void }) => {
  const isActive = false;

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[101] bg-black bg-opacity-60 flex justify-center items-center">
      <div className="relative w-full max-w-[330px] max-h-screen overflow-y-auto bg-white p-[24px] rounded-[12px] shadow-lg pc:max-w-[640px]">
        <div className="flex flex-col gap-[4px]">
          {/* Header */}
          <div className="text-[18px] font-bold leading-[28px]">Contact Us</div>
          <div className="text-[14px] leading-[18.2px] tracking-[-2%]">
            Reach out to us if you have any questions
          </div>
          <div
            className="absolute top-[16px] right-[16px] cursor-pointer p-[10px]"
            onClick={onClose}
          >
            <Image
              src={"/images/close.png"}
              width={48}
              height={48}
              alt="Close Button"
              className="!w-[24px] !h-[24px]"
            />
          </div>
        </div>
        <div className="h-[20px]"></div>
        <div className="flex flex-col gap-[16px]">
          {/* Content */}
          <Input label="Full Name*" />
          <div className="w-full flex flex-col gap-[16px] pc:flex-row">
            <Input label="Company*" />
            <Input label="Country*" />
          </div>
          <Input label="E-Mail*" />
          <Textarea label="Message" />
        </div>
        <div className="h-[32px]"></div>
        <div className="flex gap-[12px]">
          {/* Action */}
          <button
            className="w-full h-[43px] flex justify-center items-center border border-[#6D6D6D] shadow-sm rounded-[8px] outline-none"
            onClick={onClose}
          >
            <span className="text-[#6D6D6D] text-[18px] font-bold leading-[23.4px] tracking-[4%]">
              Cancel
            </span>
          </button>
          <button
            className="w-full h-[43px] flex justify-center items-center bg-primary shadow-sm rounded-[8px] outline-none disabled:bg-[#6D6D6D]"
            disabled={!isActive}
          >
            <span className="text-white text-[18px] font-bold leading-[23.4px] tracking-[4%]">
              Confirm
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
