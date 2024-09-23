"use client";
import React, { useCallback, useState } from "react";
import Section from "./Section";
import axios from "axios";
import { validateEmail } from "@/utils/validator";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const onSubcribe = useCallback(async () => {
    if (!email.trim()) return alert("Please enter a valid email address.");
    if (!validateEmail(email.trim()))
      return alert("정확한 이메일을 입력해주세요.");

    const { data } = await axios.post("/api/stibee", { email });
    if (data.ok) {
      alert("You have been subscribed to the newsletter.");
      setEmail("");
    }
  }, [email]);

  return (
    <Section className="bg-primary">
      <div className="flex flex-col items-center gap-[32px]">
        <p className="flex flex-col text-white text-center text-[32px] font-bold leading-[130%] tracking-[-0.64px]">
          <span>Join our community for company</span>
          <span>news and product updates – subscribe now!</span>
        </p>
        <div className="w-full max-w-[590px] flex flex-col items-center tab:flex-row">
          <input
            type="email"
            required
            className="w-full h-[54px] border-4 border-white bg-primary text-center text-white text-[16px] font-semibold leading-[130%] tracking-[-0.32px] rounded-none outline-none placeholder:text-[rgba(255, 255, 255, 0.80)] placeholder:font-medium tab:text-[18px] tab:text-start tab:px-[20px]"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full h-[54px] bg-white text-primary text-center text-[16px] font-bold tracking-[0.64px] tab:max-w-[200px] tab:text-[18px] tab:tracking-[0.72px]"
            onClick={onSubcribe}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SubscribeSection;
