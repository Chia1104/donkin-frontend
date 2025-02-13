import { heroui } from '@heroui/react';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/containers/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			primary: {
				DEFAULT: '#FF533D',
			},
			success: {
				DEFAULT: '#4caf50',
				light: '#80e27e',
				dark: '#087f23',
				transparent: 'rgba(76,175,80,0.75)',
			},
			info: {
				DEFAULT: '#2196f3',
				light: '#6ec6ff',
				dark: '#0069c0',
				transparent: 'rgba(33,150,243,0.75)',
			},
			warning: {
				DEFAULT: '#ff9800',
				light: '#ffc947',
				dark: '#c66900',
				transparent: 'rgba(255,152,0,0.75)',
			},
			danger: {
				DEFAULT: '#f44336',
				light: '#ff7961',
				dark: '#ba000d',
				transparent: 'rgba(244,67,54,0.75)',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		heroui({
			defaultTheme: 'dark',
			defaultExtendTheme: 'dark',
			themes: {
				dark: {
					colors: {
						primary: '#FF533D',
					},
				},
				light: {
					colors: {
						primary: '#FF533D',
					},
				},
			},
		}),
		typography,
	],
};

export default config;
