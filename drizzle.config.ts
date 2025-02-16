import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/database/server/schema',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
