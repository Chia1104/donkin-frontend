'use client';

import { Toaster } from 'sonner';

import type { Theme } from '@/enums/theme.enum';
import useDarkMode from '@/hooks/useDarkMode';

const ToasterPlugin = () => {
	const { theme } = useDarkMode();
	return <Toaster theme={theme as Theme} position="bottom-left" richColors />;
};

const AppPlugins = () => {
	return (
		<>
			<ToasterPlugin />
		</>
	);
};

export default AppPlugins;
