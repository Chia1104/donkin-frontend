import { createStore } from 'zustand/vanilla';

export interface ChatState {
	chatId: string;
	isPreviewOnly: boolean;
	/**
	 * TODO: define message schema
	 */
	messages: any;
	/**
	 * TODO: define preview schema
	 */
	preview: any;
}

export interface ChatActions {
	updatePreview: () => void;
	setIsPreviewOnly: (isPreviewOnly: boolean) => void;
}

export type ChatStore = ChatState & ChatActions;

export const defaultInitState: ChatState = {
	chatId: '',
	isPreviewOnly: false,
	messages: [],
	preview: null,
};

export const createChatStore = (initState?: Partial<ChatState>) => {
	const state = Object.assign({ ...defaultInitState }, initState);
	return createStore<ChatStore>()(set => ({
		...state,
		updatePreview: () => set(state => ({ ...state, preview: 'preview' })),
		setIsPreviewOnly: isPreviewOnly => set(state => ({ ...state, isPreviewOnly })),
	}));
};
