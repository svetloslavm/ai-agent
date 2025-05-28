"use client";

import { useEffect, useRef } from "react";

import { BsRobot } from "react-icons/bs";
import { useAnimation } from "@/hooks";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const { animateScrambleText } = useAnimation();

  useEffect(() => {
    if (!textRef.current) return;

    animateScrambleText(textRef.current, "{ Smart & Fast }");
  }, [textRef, animateScrambleText]);

  return (
    <div className="flex flex-col gap-3 m-auto justify-center text-center">
      <h1 className="sr-only">Smart and fast AI Agent</h1>
      <BsRobot className="m-auto text-foreground/80" size={80} />
      <p
        ref={textRef}
        className="text-2xl md:text-3xl px-4 font-bold text-foreground/80 h-8"
      />
      <p className="text-2xl md:text-3xl px-4 font-bold text-foreground/80">
        Always here to help.
      </p>
      <p className="text-xs md:text-lg px-4 text-foreground/80">
        Whether you need answers, support, or guidance - just ask.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
};
