'use client';

import { createContext, useRef, use } from 'react';
import type { ReactNode } from 'react';

import { useStore } from 'zustand';

import type { ChatStore, ChatState } from '@/stores/chat';
import { createChatStore } from '@/stores/chat';

export type ChatStoreApi = ReturnType<typeof createChatStore>;

export const ChatStoreContext = createContext<ChatStoreApi | undefined>(undefined);

export interface ChatStoreProviderProps {
	children: ReactNode;
	values?: Partial<ChatState>;
}

export const ChatStoreProvider = ({ children, values }: ChatStoreProviderProps) => {
	const storeRef = useRef<ChatStoreApi>(null);
	if (!storeRef.current) {
		storeRef.current = createChatStore(values);
	}

	return <ChatStoreContext value={storeRef.current}>{children}</ChatStoreContext>;
};

export const useChatStore = <T,>(selector: (store: ChatStore) => T): T => {
	const chatStoreContext = use(ChatStoreContext);

	if (!chatStoreContext) {
		throw new Error(`useChatStore must be used within ChatStoreProvider`);
	}

	return useStore(chatStoreContext, selector);
};
