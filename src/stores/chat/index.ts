import type { UIMessage } from '@ai-sdk/ui-utils';
import { produce } from 'immer';
import { createStore } from 'zustand/vanilla';

export interface ChatState {
	chatId: string;
	isPreviewOnly: boolean;
	currentMessage: UIMessage | null;
	messages: UIMessage[];
	/**
	 * TODO: define preview schema
	 */
	preview: any;
	asyncStatus: {
		isLoading: boolean;
		error: Error | null;
	};
}

export interface ChatActions {
	updatePreview: (preview: any) => void;
	setIsPreviewOnly: (isPreviewOnly?: boolean) => void;
	updateCurrentMessage: (message: UIMessage) => void;
	syncMessages: (messages: UIMessage[]) => void;
	syncAsyncStatus: (status: Partial<ChatState['asyncStatus']>) => void;
	completed: () => void;
}

export type ChatStore = ChatState & ChatActions;

export const defaultInitState: ChatState = {
	chatId: '',
	currentMessage: null,
	isPreviewOnly: false,
	preview: null,
	messages: [],
	asyncStatus: {
		isLoading: false,
		error: null,
	},
};

export const createChatStore = (initState?: Partial<ChatState>) => {
	const state = Object.assign({ ...defaultInitState }, initState);
	return createStore<ChatStore>()(set => ({
		...state,
		updatePreview: (preview: any) =>
			set(state =>
				produce(state, draft => {
					draft.preview = preview;
				}),
			),
		setIsPreviewOnly: isPreviewOnly =>
			set(state =>
				produce(state, draft => {
					draft.isPreviewOnly = isPreviewOnly ?? false;
				}),
			),
		updateCurrentMessage: message =>
			set(state =>
				produce(state, draft => {
					// @ts-expect-error - test action
					draft.currentMessage = message;
					draft.asyncStatus.isLoading = true;
				}),
			),
		syncMessages: messages =>
			set(state =>
				produce(state, draft => {
					draft.messages = messages;
				}),
			),
		syncAsyncStatus: status =>
			set(state =>
				produce(state, draft => {
					draft.asyncStatus = { ...draft.asyncStatus, ...status };
				}),
			),
		completed: () => set(state => ({ ...state, asyncStatus: { isLoading: false, error: null } })),
	}));
};
