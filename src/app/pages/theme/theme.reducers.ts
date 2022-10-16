import { createReducer, on } from '@ngrx/store';
import { Color, Rgb } from '../../shared/components/color-picker/color-picker.store';
import { themeActions } from './theme.actions';

export interface ThemeState {
	primary: Partial<Color>;
	secondary: Partial<Color>;
	accent: Partial<Color>;
	neutral: Partial<Color>;
	base: Partial<Color>;
	info: Partial<Color>;
	success: Partial<Color>;
	warn: Partial<Color>;
	error: Partial<Color>;
}

export type ThemeColors = keyof ThemeState;
export type ThemeColorsWithNeutral = ThemeColors | '';

const getRgbColor = (name: ThemeColors): Rgb => {
	const color = getComputedStyle(document.documentElement).getPropertyValue(`--${name}-color`).trim().split(',');
	const rgb = { red: +color[0], green: +color[1], blue: +color[2] };
	console.error(rgb);
	return rgb;
}

const initialState: ThemeState = {
	primary: { rgb: getRgbColor('primary') },
	secondary: { rgb: getRgbColor('secondary') },
	accent: { rgb: getRgbColor('accent') },
	neutral: { rgb: getRgbColor('neutral') },
	base: { rgb: getRgbColor('base') },
	info: { rgb: getRgbColor('info') },
	success: { rgb: getRgbColor('success') },
	warn: { rgb: getRgbColor('warn') },
	error: { rgb: getRgbColor('error') }
}


export const themeReducers = createReducer(
	initialState,
	on(themeActions.changeColor, (state: ThemeState, color) => ({ ...state, color }))
);