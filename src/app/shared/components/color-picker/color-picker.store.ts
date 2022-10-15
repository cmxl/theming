import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface ColorPickerState {
	color: string;
	disabled: boolean;
}

@Injectable()
export class ColorPickerStore extends ComponentStore<ColorPickerState> {

	constructor() {
		super({ color: '#000000', disabled: false });
	}

	readonly setDisabled = this.updater((state: ColorPickerState, disabled: boolean) => ({ ...state, disabled }));
	readonly changeColor = this.updater((state: ColorPickerState, color: string) => ({ ...state, color }));

	readonly hexColor$ = this.select((state) => {
		const color = state.color?.replace('#', '');
		if (color) {
			const aRgbHex = color.match(/.{1,2}/g)!;
			var aRgb = [
				parseInt(aRgbHex[0], 16),
				parseInt(aRgbHex[1], 16),
				parseInt(aRgbHex[2], 16)
			];
			return `rgb(` + aRgb.join(', ') + `)`;
		}
		return '';
	});

	readonly vm$ = this.select((state) => state);

}