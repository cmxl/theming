import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Color } from 'src/app/shared/components/color-picker/color-picker.store';
import { themeActions } from './theme.actions';

@Injectable()
export class ThemeEffects {

	readonly setColorEffect = createEffect(() => this.actions$
		.pipe(
			ofType(themeActions.changeColor),
			tap(x => this.setCssVariables(x.colors))
		), { dispatch: false });

	constructor(private actions$: Actions) {

	}


	private setCssVariables(colors: { [color: string]: Color }): void {
		for (let e of Object.entries(colors)) {
			const name = e[0];
			const color = e[1];
			document.documentElement.style.setProperty(`--${name}-color`, `${color.rgb.red}, ${color.rgb.green}, ${color.rgb.blue}`);
		}
	}



}