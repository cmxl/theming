import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, Observable, tap } from 'rxjs';

export interface Rgb {
	red: number;
	green: number;
	blue: number;
}

export interface Color {
	hex: string;
	rgb: Rgb;
	hue: number;
}

export interface ColorPickerState {
	color: Color;
	disabled: boolean;
}

@Injectable()
export class ColorPickerStore extends ComponentStore<ColorPickerState> {

	private hexToRgb(hex: string): { red: number, green: number, blue: number } {
		const color = hex?.replace('#', '');
		if (color) {
			const aRgbHex = color.match(/.{1,2}/g)!;
			return {
				red: parseInt(aRgbHex[0], 16),
				green: parseInt(aRgbHex[1], 16),
				blue: parseInt(aRgbHex[2], 16)
			};
		}
		return { red: 0, green: 0, blue: 0 };
	}

	private hueFromRgb(rgb: { red: number; green: number; blue: number; }): number {
		const { red, green, blue } = rgb;
		const min = Math.min(Math.min(red, green), blue);
		const max = Math.max(Math.max(red, green), blue);

		if (min == max) {
			return 0;
		}

		let hue = 0;
		if (max == red) {
			hue = (green - blue) / (max - min);

		} else if (max == green) {
			hue = 2 + (blue - red) / (max - min);

		} else {
			hue = 4 + (red - green) / (max - min);
		}

		hue = hue * 60;
		if (hue < 0) hue = hue + 360;

		return Math.round(hue);
	}

	private rgbToHex(rgb: { red: number; green: number; blue: number; }): string {
		return `#${(rgb.red).toString(16)}${(rgb.green).toString(16)}${(rgb.blue).toString(16)}`;
	}

	constructor() {
		super({ color: { hex: '#000000', rgb: { red: 0, green: 0, blue: 0 }, hue: 0 }, disabled: false });
	}

	readonly setDisabled = this.updater((state: ColorPickerState, disabled: boolean) => ({ ...state, disabled }));
	readonly setColor = this.updater((state: ColorPickerState, color: Color) => ({ ...state, color }));


	readonly changeColor = this.effect((origin$: Observable<{ hex: string, rgb: Rgb, callback: (c: Color) => void }>) => origin$
		.pipe(
			map((color) => {

				if (color.hex) {
					const rgb = this.hexToRgb(color.hex);
					const hue = this.hueFromRgb(rgb);
					return { hex: color.hex, rgb, hue, callback: color.callback };
				}

				if (color.rgb) {
					const hex = this.rgbToHex(color.rgb);
					const hue = this.hueFromRgb(color.rgb);
					return { hex, rgb: color.rgb, hue, callback: color.callback };
				}

				return { hex: '#000000', rgb: { red: 0, green: 0, blue: 0 }, hue: 0, callback: color.callback };
			}),
			tap((x) => {
				const color = { hex: x.hex, rgb: { red: x.rgb.red, green: x.rgb.green, blue: x.rgb.blue }, hue: x.hue };
				this.setColor(color);
				x.callback(color);
			})
		)
	);

	readonly vm$ = this.select((state) => state);

}
