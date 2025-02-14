import { drizzle } from 'drizzle-orm/neon-http';

import { env } from '@/utils/env';

export const db = drizzle(env.DATABASE_URL);
