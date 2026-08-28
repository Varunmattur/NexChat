'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import { conversations as initialConversations } from '@/lib/mockData';
import type { Conversation, Message } from '@/types/chat';

export default function InboxLayout() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeConversation = conversations.find((c) => c.id === activeId) ?? null;

  const handleSelect = (id: string) => {
    setActiveId(id);
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)),
    );
  };

  const handleSend = (text: string) => {
    if (!activeId || !text.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage: Message = {
      id: `m-${Date.now()}`,
      conversationId: activeId,
      text: text.trim(),
      sender: 'me',
      timestamp: now,
      status: 'sent',
    };
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              messages: [...c.messages, newMessage],
              lastMessage: newMessage.text,
              lastMessageTime: now,
            }
          : c,
      ),
    );
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar
        conversations={conversations}
        activeId={activeId}
        onSelect={handleSelect}
      />
      <ChatWindow
        conversation={activeConversation}
        onSend={handleSend}
      />
    </div>
  );
}
