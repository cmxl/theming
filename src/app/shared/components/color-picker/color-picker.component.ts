import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorPickerStore } from './color-picker.store';

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

	private _color?: string = undefined;
	private onTouched: () => void = () => { };
	private onChanged: (color: string) => void = () => { };

	constructor(
		private componentStore: ColorPickerStore
	) { }

	readonly vm$ = this.componentStore.vm$;
	readonly hexColor$ = this.componentStore.hexColor$;

	writeValue(color: string): void {
		if (this._color !== color)
			this.componentStore.changeColor(color);
	}

	registerOnChange(fn: any): void {
		this.onChanged = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	changeColor(color: string): void {
		if (this._color !== color) {
			this.componentStore.changeColor(color);
			this.onChanged(color);
		}
	}

	onBlur(): void {
		this.onTouched();
	}

	setDisabledState?(isDisabled: boolean): void {
		this.componentStore.setDisabled(isDisabled);
	}
}