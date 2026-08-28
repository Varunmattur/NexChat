'use client';

import type { Conversation } from '@/types/chat';

interface ConversationListItemProps {
  conversation: Conversation;
  active: boolean;
  onSelect: (id: string) => void;
}

export default function ConversationListItem({ conversation, active, onSelect }: ConversationListItemProps) {
  return (
    <button
      onClick={() => onSelect(conversation.id)}
      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/60 ${
        active ? 'bg-secondary' : ''
      }`}
    >
      <div className="relative shrink-0">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: conversation.avatarColor }}
        >
          {conversation.initials}
        </div>
        {conversation.online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-medium text-foreground">{conversation.contactName}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs text-muted-foreground">{conversation.lastMessage}</p>
          {conversation.unread > 0 && (
            <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
              {conversation.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
