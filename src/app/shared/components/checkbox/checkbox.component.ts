import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemeColorsWithNeutral } from 'src/app/pages/theme/theme.reducers';
import { CheckboxStore } from './checkbox.store';

@Component({
	selector: 'app-checkbox',
	styleUrls: ['./checkbox.component.scss'],
	templateUrl: './checkbox.component.html',
	providers: [
		CheckboxStore,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CheckboxComponent),
			multi: true
		}
	]
})
export class CheckboxComponent implements ControlValueAccessor {

	private onTouched: () => void = () => { };
	private onChanged: (checked: boolean) => void = () => { };

	@Input() color: ThemeColorsWithNeutral = '';
	@Input() set text(text: string) {
		this.componentStore.textChange(text);
	}

	constructor(
		private componentStore: CheckboxStore
	) { }

	writeValue(checked: boolean): void {
		if (checked != null) {
			this.componentStore.checked(checked);
		}
	}

	registerOnChange(fn: any): void {
		this.onChanged = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	readonly vm$ = this.componentStore.state$;

	toggleChecked(current: boolean): void {
		this.componentStore.checked(!current);
		this.onChanged(!current);
	}

	onBlur(): void {
		this.onTouched();
	}

}