import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Color } from '../../shared/components/color-picker/color-picker.store';
import { themeActions } from './theme.actions';
import { ThemeColorsWithNeutral } from './theme.reducers';

@Component({
	styleUrls: ['./theme.page.scss'],
	templateUrl: './theme.page.html'
})
export class ThemePage {
	colors: ThemeColorsWithNeutral[] = [
		'',
		'primary',
		'secondary',
		'accent',
		'info',
		'success',
		'warn',
		'error'
	];

	constructor(private store: Store<AppState>) { }
	checked: boolean = true;
	readonly vm$ = this.store.select('theme');

	changeColor(color: Color, colorName: string): void {
		this.store.dispatch(themeActions.changeColor({ colors: { [colorName]: color } }));
	}
}