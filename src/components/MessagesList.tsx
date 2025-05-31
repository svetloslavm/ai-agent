import { Message } from "./Message";
import { Message as MessageType } from "@/types";

export const MessagesList = ({ messages }: { messages: MessageType[] }) => (
  <div
    className="w-full flex-1 overflow-y-auto pr-2 sm:pr-4"
    style={{ maxHeight: "65vh" }}
  >
    {messages.map(({ message, position }) => (
      <Message
        key={crypto.randomUUID()}
        message={message}
        position={position}
      />
    ))}
  </div>
);
