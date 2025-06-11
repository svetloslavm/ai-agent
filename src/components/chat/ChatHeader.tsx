import React from "react";
import { BsRobot } from "react-icons/bs";
import { StaticPrompts } from "../StaticPrompts";

export const ChatHeader = () => (
  <>
    <div className="flex gap-2 justify-center mb-2">
      <BsRobot size={24} />
      <h1 className="text-md sm:text-xl font-bold text-foreground/80">
        Hi there! How can I help you today?
      </h1>
    </div>

    <StaticPrompts />
  </>
);
