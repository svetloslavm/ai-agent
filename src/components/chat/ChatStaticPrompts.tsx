import React, { FC } from "react";
import { BsRobot } from "react-icons/bs";
import { StaticPrompts } from "./StaticPrompts";

interface StaticPromptsProps {
  title: string;
  isLoading: boolean;
  sendMessage: (prompt: string) => void;
}

export const ChatStaticPrompts: FC<StaticPromptsProps> = ({
  title,
  isLoading,
  sendMessage,
}) => (
  <>
    <div className="flex gap-2 justify-center mb-2">
      <BsRobot size={24} />
      <h1 className="text-md sm:text-xl font-bold text-foreground/80">
        {title}
      </h1>
    </div>
    <StaticPrompts isLoading={isLoading} sendMessage={sendMessage} />
  </>
);
