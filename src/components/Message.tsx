import React, { FC } from "react";
import { Badge } from "./ui/badge";

interface Message {
  message: string;
  position: string;
}

export const Message: FC<Message> = ({ message, position }) => (
  <div
    className={`flex mb-4 sm:mb-6 ${
      position === "right" ? "justify-end" : "justify-start"
    }`}
  >
    <Badge
      variant={position === "right" ? "secondary" : "outline"}
      className="p-3 max-w-full break-all whitespace-break-spaces shadow-lg font-semibold text-xs sm:text-sm text-foreground/80"
    >
      {message}
    </Badge>
  </div>
);
