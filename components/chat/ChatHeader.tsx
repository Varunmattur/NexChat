'use client';

import { Phone, Video, MoreVertical } from 'lucide-react';
import type { Conversation } from '@/types/chat';

interface ChatHeaderProps {
  conversation: Conversation;
}

export default function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <header className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
      <div className="relative shrink-0">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: conversation.avatarColor }}
        >
          {conversation.initials}
        </div>
        {conversation.online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-green-500" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-semibold text-foreground">{conversation.contactName}</h2>
        <p className="text-xs text-muted-foreground">{conversation.status}</p>
      </div>
      <div className="flex items-center gap-1">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary" aria-label="Call">
          <Phone className="h-4.5 w-4.5" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary" aria-label="Video call">
          <Video className="h-4.5 w-4.5" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-primary" aria-label="More options">
          <MoreVertical className="h-4.5 w-4.5" />
        </button>
      </div>
    </header>
  );
}
