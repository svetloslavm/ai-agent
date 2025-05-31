import React, { FC } from "react";
import { Badge } from "./ui/badge";
import { Position } from "@/enums";

interface Message {
  message: string;
  position: Position;
}

export const Message: FC<Message> = ({ message, position }) => (
  <div
    className={`flex mb-4 ${
      position === Position.RIGHT ? "justify-end" : "justify-start"
    }`}
  >
    <Badge
      style={{ display: "inline-block" }}
      variant={position === Position.RIGHT ? "secondary" : "outline"}
      className="px-3 py-2 max-w-full break-all whitespace-break-spaces shadow-lg text-xs sm:text-sm text-foreground/80"
    >
      {message}
    </Badge>
  </div>
);
