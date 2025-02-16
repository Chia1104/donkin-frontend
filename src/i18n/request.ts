import { getRequestConfig } from 'next-intl/server';

import { env } from '@/utils/env';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale;

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as Locale)) {
		locale = routing.defaultLocale;
	}

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
		timeZone: env.NEXT_PUBLIC_DEFAULT_TIME_ZONE,
	};
});
