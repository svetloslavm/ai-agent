import { useState, useCallback } from 'react';
import { Role } from '@/enums';
import { Message } from '@/types';

export const useMessage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(
    async (input: string) => {
      try {
        setIsLoading(true);
        const userMsg: Message = { role: Role.USER, text: input };
        const newHistory = [...messages, userMsg];
        setMessages(newHistory);

        const res = await fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({
            input,
            history: newHistory.map(({ role, text }) => ({
              role,
              content: text,
            })),
          }),
        });

        const data = await res.json();
        setMessages([...newHistory, { role: Role.ASSISTANT, text: data.output }]);
      } catch (error) {
        console.error('Failed to send message:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [messages],
  );

  return { input, messages, isLoading, setInput, sendMessage };
};
