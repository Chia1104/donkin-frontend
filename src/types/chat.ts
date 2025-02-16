export interface ChatTTS {
	contentMd5?: string;
	file?: string;
	voice?: string;
}

export interface ChatFileItem {
	fileType: string;
	id: string;
	name: string;
	size: number;
	url: string;
}

export interface ChatImageItem {
	alt: string;
	id: string;
	url: string;
}

export interface ChatFileChunk {
	fileId: string;
	fileType: string;
	fileUrl: string;
	filename: string;
	id: string;
	similarity?: number;
	text: string;
}

export interface ChatMessage {
	chunksList?: ChatFileChunk[];
	content: string;
	createdAt: number;

	fileList?: ChatFileItem[];

	id: string;
	imageList?: ChatImageItem[];

	/**
	 * observation id
	 */
	observationId?: string;
	/**
	 * parent message id
	 */
	parentId?: string;

	/**
	 * quoted other message's id
	 */
	quotaId?: string;
	ragQuery?: string | null;
	ragQueryId?: string | null;
	ragRawQuery?: string | null;

	// reasoning?: ModelReasoning | null;

	/**
	 * message role type
	 */
	// role: MessageRoleType;
	sessionId?: string;
	threadId?: string | null;
	updatedAt: number;
}
