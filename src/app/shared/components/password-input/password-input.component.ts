import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordInputStore } from './password-input.store';

@Component({
	selector: 'app-password-input',
	styleUrls: ['./password-input.component.scss'],
	templateUrl: './password-input.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		PasswordInputStore,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordInputComponent),
			multi: true
		}
	]
})
export class PasswordInputComponent implements ControlValueAccessor {

	private _password?: string = undefined;
	private onTouched: () => void = () => { };
	private onChanged: (password: string) => void = (password) => { };

	@Input() set color(color: string) {
		this.componentStore.changeColor(color);
	}

	@Input() set placeholder(placeholder: string) {
		this.componentStore.changePlaceholder(placeholder);
	}

	constructor(
		private componentStore: PasswordInputStore
	) {
	}

	writeValue(password: string): void {
		if (this._password !== password)
			this.componentStore.changePassword(password);
	}

	registerOnChange(fn: any): void {
		this.onChanged = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	onBlur(): void {
		this.onTouched();
	}

	readonly vm$ = this.componentStore.vm$;

	togglePassword(): void {
		this.componentStore.togglePassword();
	}

	changePassword(password: string): void {
		if (this._password !== password) {
			this.componentStore.changePassword(password);
			this.onChanged(password);
		}
	}
}