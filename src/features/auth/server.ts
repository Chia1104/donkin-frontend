import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';

import { db } from '@/db';
import * as schema from '@/db/schema';

export const auth = betterAuth({
	appName: 'Donkin',

	emailAndPassword: {
		enabled: true,
	},

	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),

	plugins: [admin()],
});
