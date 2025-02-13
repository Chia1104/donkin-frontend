import ky from 'ky';
import type { Options } from 'ky';

import { env } from './env';

type RequestOptions = {
	requestMode?: 'proxy' | 'self-api' | 'external';
} & Options;

export const request = (defaultOptions?: RequestOptions) => {
	const { requestMode = 'self-api' } = defaultOptions || {};
	let prefixUrl;
	switch (requestMode) {
		case 'proxy':
			prefixUrl = '/proxy-api';
			break;
		case 'self-api':
			prefixUrl = '/';
			break;
		case 'external':
			prefixUrl = env.NEXT_PUBLIC_APP_AIP_HOST;
			break;
		default:
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			throw new Error(`Invalid requestMode: ${requestMode}`);
	}
	return ky.extend({
		timeout: 60_000,
		credentials: 'include',
		hooks: {
			beforeRequest: [
				request => {
					request.headers.set('Content-Type', 'application/json');
				},
			],
		},
		prefixUrl,
		...defaultOptions,
	});
};
