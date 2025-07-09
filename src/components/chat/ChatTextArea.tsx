'use client';

import React, { ChangeEvent, FC, useCallback } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

import { Textarea, Button } from '@/components/ui';
import { Loading } from '@/components/common';

interface ChatTextAreaProps {
  isLoading: boolean;
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

export const ChatTextArea: FC<ChatTextAreaProps> = ({ isLoading, input, setInput, sendMessage }) => {
  const isButtonDisabled = !input.trim();

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    [setInput],
  );

  const resetInput = useCallback(() => {
    setInput('');
  }, [setInput]);

  const submitPrompt = useCallback(async () => {
    if (isLoading) return;

    sendMessage();
    resetInput();
  }, [isLoading, sendMessage, resetInput]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && !isButtonDisabled) {
        e.preventDefault();
        submitPrompt();
      }
    },
    [isButtonDisabled, submitPrompt],
  );

  return (
    <div className="relative">
      {isLoading && <Loading />}
      <Textarea
        className="resize-none h-20 sm:h-25 overflow-y-auto"
        placeholder="Ask me anything..."
        value={input}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        className="absolute bottom-1 right-1 hover:bg-foreground/10 active:bg-foreground/10 transition-colors duration-200 group"
        variant="link"
        onClick={submitPrompt}
        disabled={isButtonDisabled}
      >
        <FaLongArrowAltUp size={28} className="transition-transform duration-200 group-hover:scale-125" />
      </Button>
    </div>
  );
};
