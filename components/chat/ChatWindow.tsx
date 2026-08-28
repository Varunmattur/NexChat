'use client';

import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import EmptyState from './EmptyState';
import type { Conversation } from '@/types/chat';

interface ChatWindowProps {
  conversation: Conversation | null;
  onSend: (text: string) => void;
}

export default function ChatWindow({ conversation, onSend }: ChatWindowProps) {
  if (!conversation) {
    return (
      <main className="hidden flex-1 items-center justify-center bg-background md:flex">
        <EmptyState />
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col bg-background">
      <ChatHeader conversation={conversation} />
      <MessageList messages={conversation.messages} />
      <MessageInput onSend={onSend} />
    </main>
  );
}
