import type { Message } from '@ai-sdk/ui-utils';
import { createStore } from 'zustand/vanilla';

export interface ChatState {
	chatId: string;
	isPreviewOnly: boolean;
	message: Message | null;
	/**
	 * TODO: define preview schema
	 */
	preview: any;
}

export interface ChatActions {
	updatePreview: () => void;
	setIsPreviewOnly: (isPreviewOnly: boolean) => void;
	updateMessage: (message: Message) => void;
}

export type ChatStore = ChatState & ChatActions;

export const defaultInitState: ChatState = {
	chatId: '',
	isPreviewOnly: false,
	message: null,
	preview: null,
};

export const createChatStore = (initState?: Partial<ChatState>) => {
	const state = Object.assign({ ...defaultInitState }, initState);
	return createStore<ChatStore>()(set => ({
		...state,
		updatePreview: () => set(state => ({ ...state, preview: 'preview' })),
		setIsPreviewOnly: isPreviewOnly => set(state => ({ ...state, isPreviewOnly })),
		updateMessage: message => set(state => ({ ...state, message })),
	}));
};
