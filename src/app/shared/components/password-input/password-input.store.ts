import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface PasswordInputState {
	hide: boolean;
	placeholder: string;
	password: string;
	color: string;
}

@Injectable()
export class PasswordInputStore extends ComponentStore<PasswordInputState> {

	constructor() {
		super({ hide: true, placeholder: '', password: '', color: '#000000' });
	}

	readonly password$ = this.select((state) => state.password);

	readonly togglePassword = this.updater((state) => ({ ...state, hide: !state.hide }));
	readonly changePlaceholder = this.updater((state, placeholder: string) => ({ ...state, placeholder }));
	readonly changePassword = this.updater((state, password: string) => ({ ...state, password }));
	readonly changeColor = this.updater((state, color: string) => ({ ...state, color }));
}