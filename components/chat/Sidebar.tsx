'use client';

import { Search, MessageSquare } from 'lucide-react';
import SidebarHeader from './SidebarHeader';
import ConversationList from './ConversationList';
import type { Conversation } from '@/types/chat';

interface SidebarProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function Sidebar({ conversations, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="flex w-full flex-col border-r border-border bg-card md:w-[360px] md:max-w-[40vw]">
      <SidebarHeader />
      <ConversationList
        conversations={conversations}
        activeId={activeId}
        onSelect={onSelect}
      />
      <div className="flex items-center gap-2 border-t border-border px-4 py-3 text-xs text-muted-foreground">
        <MessageSquare className="h-3.5 w-3.5" />
        <span>{conversations.length} conversations</span>
      </div>
    </aside>
  );
}
