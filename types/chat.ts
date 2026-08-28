export type MessageStatus = 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  conversationId: string;
  text: string;
  sender: 'me' | 'them';
  timestamp: string;
  status?: MessageStatus;
}

export interface Conversation {
  id: string;
  contactName: string;
  avatarColor: string;
  initials: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: number;
  online: boolean;
  status: string;
  messages: Message[];
}
