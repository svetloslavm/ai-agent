'use client';

import { useCallback } from 'react';
import { useMessage } from '@/hooks';
import { MessagesList } from './MessagesList';
import { ChatTextArea } from './ChatTextArea';
import { ChatStaticPrompts } from './ChatStaticPrompts';

export const ChatClientContainer = () => {
  const { input, messages, isLoading, setInput, sendMessage } = useMessage();

  const handleSendMessage = useCallback(() => {
    sendMessage(input);
  }, [input, sendMessage]);

  return (
    <div className="flex-1 flex flex-col justify-between px-4 w-full max-w-3xl mt-4 mb-12 sm:mb-16">
      <MessagesList messages={messages} />

      {messages.length === 0 && (
        <ChatStaticPrompts
          title="Hi there! How can I help you today?"
          isLoading={isLoading}
          sendMessage={sendMessage}
        />
      )}

      <ChatTextArea isLoading={isLoading} input={input} setInput={setInput} sendMessage={handleSendMessage} />
    </div>
  );
};
