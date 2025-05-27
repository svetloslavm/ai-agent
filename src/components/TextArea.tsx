"use client";

import React, { ChangeEvent, useCallback, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltUp } from "react-icons/fa";

export const TextArea = () => {
  const [prompt, setPrompt] = useState("");

  const isButtonDisabled = !prompt.trim();

  const handleTextChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setPrompt(e.target.value);
    },
    []
  );

  const resetPrompt = useCallback(() => {
    setPrompt("");
  }, []);

  const submitPrompt = useCallback(() => {
    // TODO: Add your submit logic here
    console.log("Submit prompt: ", JSON.stringify(prompt));

    resetPrompt();
  }, [prompt, resetPrompt]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey && !isButtonDisabled) {
        e.preventDefault();
        submitPrompt();
      }
    },
    [isButtonDisabled, submitPrompt]
  );

  return (
    <div className="relative">
      <Textarea
        className="resize-none h-20 sm:h-25 overflow-y-auto"
        placeholder="Ask me anything..."
        value={prompt}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        className="absolute bottom-1 right-1 hover:bg-foreground/10 active:bg-foreground/10 transition-colors duration-200 group"
        variant="link"
        onClick={submitPrompt}
        disabled={isButtonDisabled}
      >
        <FaLongArrowAltUp
          size={28}
          className="transition-transform duration-200 group-hover:scale-125"
        />
      </Button>
    </div>
  );
};
