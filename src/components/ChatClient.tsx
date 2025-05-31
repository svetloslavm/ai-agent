"use client";

import { useFetchMockData } from "@/hooks/useFetchMockData";
import { ToastContainer } from "react-toastify";
import { MessagesList } from "./MessagesList";
import { ChatTextArea } from "./ChatTextArea";
import { ChatHeader } from "./ChatHeader";

export const ChatClient = () => {
  const { messages } = useFetchMockData();

  return (
    <>
      <ToastContainer />
      <div className="flex-1 flex flex-col justify-between px-4 w-full max-w-3xl mt-4 mb-12 sm:mb-16">
        <MessagesList messages={messages} />
        {messages.length === 0 && <ChatHeader />}
        <ChatTextArea />
      </div>
    </>
  );
};
