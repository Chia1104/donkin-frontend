import type { createAuthClient } from 'better-auth/client';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { magicLinkClient } from 'better-auth/client/plugins';
import { passkeyClient } from 'better-auth/client/plugins';

import { Role } from '@/enums/role.enum';
import { env, IS_PRODUCTION } from '@/utils/env';

export const baseAuthClient = (config?: Parameters<typeof createAuthClient>[0]) => {
	return Object.assign(config ?? {}, {
		baseURL: IS_PRODUCTION ? env.NEXT_PUBLIC_ALPHA_AUTH_URL : 'http://localhost:3005/api/v1/auth',
		plugins: [
			inferAdditionalFields({
				user: {
					role: {
						type: [Role.User, Role.Admin],
						required: true,
						defaultValue: Role.User,
						input: true,
					},
				},
			}),
			magicLinkClient(),
			passkeyClient(),
		],
	});
};
