import React, { FC } from "react";
import { Badge } from "./ui/badge";
import { BsRobot } from "react-icons/bs";

interface Message {
  message: string;
  position: string;
}

export const Message: FC<Message> = ({ message, position }) => {
  return (
    <div
      className={`flex mb-4 ${
        position === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <Badge
        variant={position === "right" ? "secondary" : "outline"}
        className="px-3 py-2 max-w-full break-all whitespace-break-spaces shadow-lg font-semibold text-xs sm:text-sm text-foreground/80"
      >
        {message}
      </Badge>
    </div>
  );
};
