"use client";

import { useEmbedding } from "@/hooks";
import { Button } from "./ui/button";
import { staticPrompts } from "@/mocks";

export const StaticPrompts = () => {
  const { fetchEmbedding } = useEmbedding();

  const handlePromptClick = (prompt: string) => {
    fetchEmbedding(JSON.stringify(prompt));
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
      {staticPrompts.map((item) => (
        <Button
          key={item}
          variant="outline"
          className="text-xs sm:text-sm px-3 py-8 border border-grey-400 rounded-xl cursor-pointer dark:bg-input/30 dark:hover:bg-input/60 shadow-md break-words whitespace-pre-wrap hover:border-blue-500 transition-colors duration-500"
          onClick={() => handlePromptClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
