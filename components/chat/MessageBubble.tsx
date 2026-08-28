'use client';

import { CheckCheck, Check } from 'lucide-react';
import type { Message } from '@/types/chat';

interface MessageBubbleProps {
  message: Message;
  showTimestamp: boolean;
}

export default function MessageBubble({ message, showTimestamp }: MessageBubbleProps) {
  const isSent = message.sender === 'me';

  return (
    <div className={`flex flex-col ${isSent ? 'items-end' : 'items-start'}`}>
      <div
        className={`animate-message-in max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed md:max-w-[70%] ${
          isSent
            ? 'rounded-br-md bg-primary text-primary-foreground'
            : 'rounded-bl-md bg-card text-foreground shadow-sm'
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.text}</p>
        <div className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${isSent ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
          <span>{message.timestamp}</span>
          {isSent && message.status === 'read' && <CheckCheck className="h-3 w-3" />}
          {isSent && message.status === 'delivered' && <Check className="h-3 w-3" />}
          {isSent && message.status === 'sent' && <Check className="h-3 w-3" />}
        </div>
      </div>
    </div>
  );
}
