import { useEffect, useState } from 'react';
// import { Position } from "@/enums";
// import { mockMessages } from "@/mocks";
import { Message } from '@/types';

export const useFetchMockData = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = (): Promise<Message[]> =>
    new Promise((resolve) => {
      setTimeout(() => {
        //   resolve(
        //     mockMessages.map((message) => ({
        //       ...message,
        //       position: message.position as Position,
        //     }))
        //   );
        resolve([]);
      }, 1000);
    });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const msgs = await fetchMessages();
        if (!controller.signal.aborted) {
          setMessages(msgs);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Failed to fetch messages:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { messages };
};
