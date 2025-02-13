export const Theme = {
	System: 'system',
	Dark: 'dark',
	Light: 'light',
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];
