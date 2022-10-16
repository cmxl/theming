import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color, ColorPickerStore } from './color-picker.store';

@Component({
	selector: 'app-color-picker',
	styleUrls: ['./color-picker.component.scss'],
	templateUrl: './color-picker.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		ColorPickerStore,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ColorPickerComponent),
			multi: true
		}
	]
})
export class ColorPickerComponent implements ControlValueAccessor {

	private _color?: Partial<Color> = {};
	private onTouched: () => void = () => { };
	private onChanged: (color: Color) => void = () => { };

	constructor(
		private componentStore: ColorPickerStore
	) {
	}

	readonly vm$ = this.componentStore.state$;

	writeValue(color: Color): void {
		if (this._color !== color && color != null)
			this.componentStore.changeColor({ hex: color.hex, rgb: color.rgb, callback: () => { } });
	}

	registerOnChange(fn: any): void {
		this.onChanged = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	changeColor(color: string): void {
		if (this._color?.hex !== color) {
			this.componentStore.changeColor({ hex: color, rgb: { red: 0, green: 0, blue: 0 }, callback: this.onChanged })
		}
	}

	onBlur(): void {
		this.onTouched();
	}

	setDisabledState?(isDisabled: boolean): void {
		this.componentStore.setDisabled(isDisabled);
	}
}