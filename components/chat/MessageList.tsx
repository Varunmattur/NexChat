'use client';

import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import type { Message } from '@/types/chat';

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto px-4 py-6 md:px-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-2">
        {messages.map((message, index) => (
          <MessageBubble
            key={message.id}
            message={message}
            showTimestamp={
              index === 0 ||
              messages[index - 1].timestamp !== message.timestamp
            }
          />
        ))}
        <div ref={endRef} />
      </div>
    </div>
  );
}
