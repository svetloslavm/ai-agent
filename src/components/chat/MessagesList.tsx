import { Message as MessageType } from "@/types";
import { Message } from "./Message";
import { FC } from "react";

interface MessagesListProps {
  messages: Array<MessageType>;
}

export const MessagesList: FC<MessagesListProps> = ({ messages }) => (
  <div className="w-full flex-1 overflow-y-auto pr-2 sm:pr-4 max-h-[65vh]">
    {messages.map(({ role, text }) => (
      <Message key={crypto.randomUUID()} text={text} role={role} />
    ))}
  </div>
);
