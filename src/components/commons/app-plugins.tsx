'use client';

import { Toaster } from 'sonner';

import type { Theme } from '@/enums/theme.enum';
import useTheme from '@/hooks/useTheme';

const ToasterPlugin = () => {
	const { theme } = useTheme();
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
