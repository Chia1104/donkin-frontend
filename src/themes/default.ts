import type { AlertClassKey } from '@mui/material';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
	interface TypeBackground {
		default: string;
		paper: string;
		surface: string;
		onSurface: string;
		top: string;
	}
	interface TypeText {
		darkPrimary1: string;
		darkPrimary2: string;
		darkPrimary3: string;
		darkPrimary4: string;
		lightPrimary1: string;
		lightPrimary2: string;
		lightPrimary3: string;
		lightPrimary4: string;
		gary1: string;
		gary2: string;
		gary3: string;
		gary4: string;
		gary5: string;
		gary6: string;
		gary7: string;
		gary8: string;
		gary9: string;
		gary10: string;
	}
	interface TypeBorder {
		main: string;
		light: string;
		dark: string;
		disabled: string;
	}
	interface Palette {
		default: Palette['primary'];
		border: TypeBorder;
		background: Palette['background'];
		text: Palette['text'];
	}
	interface PaletteOptions {
		default?: PaletteOptions['primary'];
		border?: Partial<TypeBorder>;
		background?: Partial<TypeBackground>;
		text?: Partial<TypeText>;
	}
}

declare module '@mui/material/styles/overrides' {
	export interface ComponentNameToClassKey {
		MuiAlert: AlertClassKey;
	}
}

export const defaultTheme = createTheme({
	typography: {
		button: { fontSize: 14 },
	},
	palette: {
		primary: {
			main: '#FF533D',
			contrastText: '#fff',
		},
	},
});

export default defaultTheme;
