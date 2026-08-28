'use client';

import { MessageSquare } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary">
        <MessageSquare className="h-9 w-9 text-primary" />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-foreground">Select a conversation</h2>
      <p className="max-w-xs text-sm text-muted-foreground">
        Choose a chat from the sidebar to start viewing messages and replying to your customers.
      </p>
    </div>
  );
}
