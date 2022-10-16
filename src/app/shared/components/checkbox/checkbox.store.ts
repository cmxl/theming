import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface CheckboxState {
	checked: boolean;
	disabled: false;
	text: string;
}

@Injectable()
export class CheckboxStore extends ComponentStore<CheckboxState> {

	readonly checked = this.updater((state, checked: boolean) => ({ ...state, checked }));
	readonly textChange = this.updater((state, text: string) => ({ ...state, text }));

	readonly vm$ = this.select((state) => state);

	constructor() {
		super({ checked: false, disabled: false, text: '' });
	}
}