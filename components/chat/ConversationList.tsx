'use client';

import ConversationListItem from './ConversationListItem';
import type { Conversation } from '@/types/chat';

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function ConversationList({ conversations, activeId, onSelect }: ConversationListProps) {
  return (
    <div className="scrollbar-thin flex-1 overflow-y-auto">
      {conversations.map((conversation) => (
        <ConversationListItem
          key={conversation.id}
          conversation={conversation}
          active={conversation.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
