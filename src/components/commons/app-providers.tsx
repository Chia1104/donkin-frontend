'use client';

import { HeroUIProvider } from '@heroui/react';
import type { AbstractIntlMessages } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

import { useRouter } from '@/i18n/routing';

interface Props {
	children?: React.ReactNode;
	messages: AbstractIntlMessages;
	timeZone?: string;
	locale: I18N;
}

const AppProviders = (props: Props) => {
	const router = useRouter();
	return (
		<NextIntlClientProvider messages={props.messages} timeZone={props.timeZone} locale={props.locale}>
			<NextThemeProvider defaultTheme="system" enableSystem attribute="class">
				<HeroUIProvider navigate={void router.push}>{props.children}</HeroUIProvider>
			</NextThemeProvider>
		</NextIntlClientProvider>
	);
};

export default AppProviders;
