'use client';

import { FC } from 'react';
import { Button } from '@/components/ui';
import { staticPrompts } from '@/mocks';

interface StaticPromptsProps {
  isLoading: boolean;
  sendMessage: (prompt: string) => void;
}

export const StaticPrompts: FC<StaticPromptsProps> = ({ isLoading, sendMessage }) => (
  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
    {staticPrompts.map((staticPrompt) => (
      <Button
        key={staticPrompt}
        disabled={isLoading}
        variant="outline"
        className="text-xs sm:text-sm px-3 py-7 border border-grey-400 rounded-xl cursor-pointer dark:bg-input/30 dark:hover:bg-input/60 shadow-md break-words whitespace-pre-wrap hover:border-blue-500 transition-colors duration-500"
        onClick={() => sendMessage(staticPrompt)}
      >
        {staticPrompt}
      </Button>
    ))}
  </div>
);
